import { FunctionComponent, ReactNode } from 'react';
import Sidebar from '../common/sidebar/Sidebar';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ['latin'], weight: '500' });

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div
      className={`${quicksand.className} grid first-letter:grid grid-cols-[min-content_1fr] min-h-screen`}
    >
      <Sidebar />
      <main className="py-10 pl-10 md:pl-20 text-2xl">{children}</main>
    </div>
  );
};

export default Layout;
