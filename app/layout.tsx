import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GitHub PR Billing Tracker — Track Billable Hours from PR Activity',
  description: 'Automatically convert GitHub commits, PR reviews, and comments into billable time entries with client categorization. Built for freelance developers and dev agencies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6226b344-1cdb-4a80-af46-3b4f84d7e5b9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
