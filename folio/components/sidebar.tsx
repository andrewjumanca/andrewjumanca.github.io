import Link from 'next/link'
import '../styles/global.css'

const Sidebar: React.FC = () => {
  return (
    <div>
      <nav className='sidebar'>
        <ul className='navbar'>
          <li>
            <Link href="/">
              <span>home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span>about me</span>
            </Link>
          </li>
          <li>
            <Link href="/experiences">
              <span>experiences</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span>projects</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
