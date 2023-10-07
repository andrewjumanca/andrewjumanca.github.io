import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link href="/about">
              <span>About</span>About
            </Link>
          </li>
          <li>
            <Link href="/experiences">
              <span>Experiences</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span>Projects</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
