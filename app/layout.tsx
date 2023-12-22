import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin-ext"],
})

const azonix = localFont({
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
      <body className={roboto.className}>
        {/* <div className='md:hidden h-[100vh] w-[100vw] flex items-center flex-col gap-[1rem] justify-center'>
          <img src='/assets/images/logo.png' alt='logo' className='w-[3rem] h-[3rem]' />
          <p className='text-white text-center text-[2rem]'>Mobile View Not Supported</p>
          <p className='text-white text-center text-[1rem]'>Please use a desktop browser to view this site</p>
        </div> */}
        <div className=''>
          {children}
        </div>
      </body>
    </html>
  )
}
