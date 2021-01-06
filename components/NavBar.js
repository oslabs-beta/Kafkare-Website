import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navleft-container">
        <ul>
          <li className="navleft">
            <Link href="#section2">
              <a>Features</a>
            </Link>
          </li>
          <li className="navleft team">
            <Link href="#section3">
              <a>Team</a>
            </Link>
          </li>
          <li className="navleft">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navright">
        <Link href="https://github.com/oslabs-beta/KafKare">
          <a>
            <Image
              className="test4"
              src="/Octocat.png"
              alt="Github"
              width={40}
              height={40}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
