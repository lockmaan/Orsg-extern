import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Footer = () => {
  return (
    <footer className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
