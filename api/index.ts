import server from '../dist/server/server.js'
import type { IncomingMessage, ServerResponse } from 'node:http'

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void> {
  const proto = (req.headers['x-forwarded-proto'] as string | undefined) ?? 'https'
  const host = req.headers.host ?? 'localhost'
  const url = `${proto}://${host}${req.url ?? '/'}`

  const headers = new Headers()
  for (const [key, value] of Object.entries(req.headers)) {
    if (value === undefined) continue
    if (Array.isArray(value)) {
      for (const v of value) headers.append(key, v)
    } else {
      headers.set(key, value)
    }
  }

  const method = (req.method ?? 'GET').toUpperCase()

  const chunks: Array<Uint8Array> = []
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }

  const body =
    chunks.length > 0 && method !== 'GET' && method !== 'HEAD'
      ? Buffer.concat(chunks)
      : undefined

  const request = new Request(url, {
    method,
    headers,
    body,
  })

  const response = await server.fetch(request)

  res.statusCode = response.status
  res.statusMessage = response.statusText

  for (const [key, value] of response.headers.entries()) {
    if (key.toLowerCase() === 'set-cookie') continue
    res.setHeader(key, value)
  }

  const setCookie = response.headers.get('set-cookie')
  if (setCookie) {
    res.setHeader('set-cookie', setCookie)
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
}
