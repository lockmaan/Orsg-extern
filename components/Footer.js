import Link from "next/link";
import footerStyles from "../styles/Footer.module.css";
import Credits from "./Credits";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <Credits />
      <SocialMedia />
    </footer>
  );
};

export default Footer;
