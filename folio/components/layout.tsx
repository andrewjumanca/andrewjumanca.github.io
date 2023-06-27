import { ReactNode } from 'react';
import Sidebar from './sidebar';

type LayoutProps = {
    children: ReactNode;
  };

  const Layout: React.FC<LayoutProps> = ({ children }) => {  return (
    <div className="layout">
      <header>
        <h1>Andrew Jumanca: Portfolio Website</h1>
      </header>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
