import { ReactNode } from 'react';
import Sidebar from './sidebar';
import '../styles/global.css'

type LayoutProps = {
    children: ReactNode;
  };

  const Layout: React.FC<LayoutProps> = ({ children }) => {  return (
    <div className="px-page">
      <header>
      </header>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
