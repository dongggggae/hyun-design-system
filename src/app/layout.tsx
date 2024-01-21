import type { Metadata } from 'next';
import '@styles/hds.scss';

import { LayoutHeader, LayoutSidebar, LayoutMain } from '@layout/LayoutIndex';

export const metadata: Metadata = {
  title: 'Hyun-Design-System',
  description: '디자인 시스템',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body id="root">
        <div className="wrap">
          <LayoutHeader />
          <LayoutSidebar></LayoutSidebar>
          <LayoutMain>{children}</LayoutMain>
        </div>
      </body>
    </html>
  );
}
