import type { Metadata } from 'next';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Inter } from 'next/font/google';
// Component
import RecoilWrapper from '@components/common/RecoilWrapper'
import Header from '@components/header';
// Style
import '@styles/common.scss';

config.autoAddCss = false;
const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Unsplash clone',
  description: 'Unsplash clone',
}

export default function RootLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <RecoilWrapper>
          <div id='wrap'>
            <Header />
            <div id="container">
              {children}
              {modal && modal}
            </div>
          </div>
        </RecoilWrapper>
      </body>
    </html>
  )
}
