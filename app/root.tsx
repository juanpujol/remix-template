import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix'

import styles from './tailwind.css'

import type { MetaFunction } from 'remix'
export const meta: MetaFunction = () => {
  return { title: 'New Remix App' }
}

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,600,700&amp;display=swap'
    }
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-sans">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
