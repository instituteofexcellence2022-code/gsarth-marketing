import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import server from './dist/server/server.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = 3000
const STATIC_DIR = path.join(__dirname, 'dist', 'client')

const MIME_TYPES = {
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.css': 'text/css',
  '.html': 'text/html',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject',
  '.webmanifest': 'application/manifest+json',
}

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  return MIME_TYPES[ext] || 'application/octet-stream'
}

const nodeServer = http.createServer(async (req, res) => {
  const urlPath = new URL(req.url, `http://${req.headers.host}`).pathname

  // Try to serve static files first
  const staticPath = path.join(STATIC_DIR, urlPath === '/' ? 'index.html' : urlPath)
  const safePath = path.resolve(staticPath)
  
  if (safePath.startsWith(path.resolve(STATIC_DIR)) && fs.existsSync(safePath) && fs.statSync(safePath).isFile()) {
    const mimeType = getMimeType(safePath)
    res.writeHead(200, {
      'Content-Type': mimeType,
      'Cache-Control': urlPath.startsWith('/assets/') ? 'public, max-age=31536000, immutable' : 'public, max-age=3600',
    })
    fs.createReadStream(safePath).pipe(res)
    return
  }

  // Fall back to SSR
  const url = `http://${req.headers.host}${req.url}`
  const headers = new Headers()
  for (const [key, value] of Object.entries(req.headers)) {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        for (const v of value) headers.append(key, v)
      } else {
        headers.set(key, value)
      }
    }
  }

  const chunks = []
  for await (const chunk of req) {
    chunks.push(chunk)
  }
  const body = Buffer.concat(chunks).length > 0 ? Buffer.concat(chunks) : null

  const request = new Request(url, {
    method: req.method,
    headers,
    body: body && req.method !== 'GET' && req.method !== 'HEAD' ? body : undefined,
  })

  try {
    const response = await server.fetch(request)
    res.statusCode = response.status
    res.statusMessage = response.statusText
    for (const [key, value] of response.headers.entries()) {
      res.setHeader(key, value)
    }
    if (response.body) {
      const reader = response.body.getReader()
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        res.write(Buffer.from(value))
      }
    }
    res.end()
  } catch (err) {
    console.error('Server error:', err)
    res.statusCode = 500
    res.end('Internal Server Error')
  }
})

nodeServer.listen(PORT, () => {
  console.log(`Preview server running at http://localhost:${PORT}/`)
})
