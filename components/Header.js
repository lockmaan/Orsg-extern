import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>ORSG</span> not just like any hackathon
      </h1>
      <p className={headerStyles.description}>
        acess, analyse, find a method, and then make it into code <br /> all of
        this on problems from the real world
      </p>
    </div>
  );
};

export default Header;
