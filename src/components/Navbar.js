import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import Logo from "../../public/images/logo.png";

import { GoGlobe } from 'react-icons/go';
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

function Navbar() {
  return (
    <nav className={styles.navSection}>
      <div999 className={styles.navContainer}>
        <div className={styles.navbar}>
          <div className={styles.logoContainer}>
            <Image src={Logo} width={70} height={70} />
          </div>
          <ul className={styles.menu}>
            <Link href='/'>
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link href='/'>
              <li>
                <a>About</a>
              </li>
            </Link>
            <Link href='/'>
              <li>
                <a>Contact</a>
              </li>
            </Link>
            <Link href='/'>
              <li>
                <a>Services</a>
              </li>
            </Link>
          </ul>
          <div className={styles.socialIcons}>
            <Link href='/'>
              <GoGlobe className={styles.indvIcon} />
            </Link>
            <Link href='/'>
              <AiFillFacebook className={styles.indvIcon} />
            </Link>
            <Link href='/'>
              <AiFillTwitterCircle className={styles.indvIcon} />
            </Link>
            <Link href='/'>
              <FiInstagram className={styles.indvIcon} />
            </Link>
          </div>
        </div>
      </div999>
    </nav>
  );
}

export default Navbar;
