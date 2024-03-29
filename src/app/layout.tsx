import './globals.css'
import { Inter } from 'next/font/google'
import { FacebookPixel } from './components'
// import { FBPixelScript, FBPixelProvider } from '@rivercode/facebook-conversion-api-nextjs/components';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Maloni Gold - Promoção Whey 100%',
  description: 'Desenvolvido por Gustavo Assis - https://github.com/assiscs2/',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <head>
        <meta name="facebook-domain-verification" content="1mg6s10ngu5mmjbhrnuvq9j3u4fijh" />
      </head>
      <body className={inter.className}>{children}
        <FacebookPixel />
      </body>
    </html>
  )
}