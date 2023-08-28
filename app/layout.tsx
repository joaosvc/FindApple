import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['300', '400', '500', '600', '700', '800'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Find Apple',
  description: 'Find the price of your Apple device'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
