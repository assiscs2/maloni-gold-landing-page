import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { FacebookPixel } from './components'
import Script from 'next/dist/client/script';

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
        {/* <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
            fbq('track', 'PageView');
            `,
            }}
            // 'https://graph.facebook.com/v17.0/${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}/events?access_token=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_TOKEN}')
        /> */}
      </head>
      <body className={inter.className}>{children}
        
        <Analytics />
        <FacebookPixel />

      </body>
    </html>
  )
}