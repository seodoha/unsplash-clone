import type { Metadata } from 'next';
// Component
import Header from '@components/header';
// Style
import '@/styles/common.scss';

export const metadata: Metadata = {
  title: 'Unsplash clone',
  description: 'Unsplash clone',
}

export default function RootLayout({ children,}: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div id='wrap'>
          <Header />
          <div id="container">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
