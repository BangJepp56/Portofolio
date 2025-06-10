import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'M. Jefri Agiansyah | Full Stack Developer & Designer',
  description: 'Full Stack Developer, UI/UX Designer, and Digital Creative Professional specializing in web development, mobile apps, and user experience design.',
  keywords: 'web development, UI/UX design, graphic design, full stack developer, Laravel, Flutter, Next.js',
  authors: [{ name: 'M. Jefri Agiansyah' }],
  creator: 'M. Jefri Agiansyah',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'M. Jefri Agiansyah | Full Stack Developer & Designer',
    description: 'Full Stack Developer & UI/UX Designer with a passion for creating elegant solutions.',
    siteName: 'M. Jefri Agiansyah Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M. Jefri Agiansyah | Full Stack Developer & Designer',
    description: 'Full Stack Developer & UI/UX Designer with a passion for creating elegant solutions.',
    creator: '@jepp_aee',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} bg-dark-900 text-dark-50 antialiased`}>
        {children}
      </body>
    </html>
  )
}