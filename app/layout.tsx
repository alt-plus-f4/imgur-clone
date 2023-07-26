import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Providers from '@/components/Providers'
import { Toaster } from '@/components/ui/Toaster'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Imgur - Home',
  description: 'Imgur clone created using NextJs and React',
}

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode
  authModal: React.ReactNode
}) {
  return (
    <html lang='en'
    className={cn(
      'imgur-gray text-slate-100 antialiased dark', 
      inter.className
    )}>

      <body className='min-h-screen pt-12 imgur-gray antialiased'>
        <Providers>

          <Navbar />
          {authModal}

          {children}
          
        </Providers>

        <Toaster />
      </body>
    </html>
  )
}
