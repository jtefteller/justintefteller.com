import { type Metadata } from 'next'

import { Providers, PostHogProvider } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Justin Tefteller',
    default:
      'Justin Tefteller - Senior Software engineer and entrepreneur based in Fayetteville, AR',
  },
  description:
    "I'm Justin Tefteller, a senior software engineer and entrepreneur based in Fayetteville, AR.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <PostHogProvider>
            <div className="flex w-full">
              <Layout>{children}</Layout>
            </div>
          </PostHogProvider>
        </Providers>
      </body>
    </html>
  )
}
