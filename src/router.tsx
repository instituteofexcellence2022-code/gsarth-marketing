import { createRouter } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { routerWithQueryClient } from '@tanstack/react-router-with-query'
import { routeTree } from './routeTree.gen'

/* ── Production-safe error fallback ── */
function DefaultErrorComponent({ error }: { error: Error }) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-50 dark:bg-red-900/20 text-red-500 mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black mb-3">Something went wrong</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
          We encountered an unexpected error. Please try refreshing the page or contact us if the problem persists.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 text-white dark:bg-white dark:text-slate-950 font-black text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Refresh Page
        </button>
        {import.meta.env.DEV && (
          <pre className="mt-8 text-left text-xs text-red-400 bg-red-50 dark:bg-red-900/10 p-4 rounded-xl overflow-auto max-h-60">
            {error.stack}
          </pre>
        )}
      </div>
    </div>
  )
}

/* ── Production-safe not-found fallback ── */
function DefaultNotFoundComponent() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-400 mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <h1 className="text-5xl sm:text-6xl font-black tracking-tighter mb-2 text-slate-200 dark:text-slate-800">404</h1>
        <h2 className="text-xl sm:text-2xl font-black mb-3">Page Not Found</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 text-white dark:bg-white dark:text-slate-950 font-black text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}

export function getRouter() {
  const queryClient = new QueryClient()

  const router = routerWithQueryClient(
    createRouter({
      routeTree,
      defaultPreload: 'intent',
      context: { queryClient },
      scrollRestoration: true,
      defaultPreloadStaleTime: 0,
      defaultErrorComponent: DefaultErrorComponent,
      defaultNotFoundComponent: DefaultNotFoundComponent,
    }),
    queryClient,
  )

  return router
}
