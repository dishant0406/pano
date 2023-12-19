import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin-ext"],
})

export const azonix = localFont({
  src: '../public/fonts/azonix.woff2',
})

export const metadata: Metadata = {
  title: 'Panoverse',
  description: 'Game all you want',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
