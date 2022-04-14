import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../UI";
import { LogoIcon } from "../../images";
import { useWindowSize } from "../../hooks";
import styles from "./styles/index.module.scss";
import { BREAKPOINTS } from "../../const";

const Header = () => {
  const { width } = useWindowSize();
  const auth = useSelector((state) => state.auth);

  return (
    <header className={styles.header}>
      <LogoIcon className={styles.header__logo} />
      {width > BREAKPOINTS.md ? (
        <>
          <nav>
            <Link to="/news">Новости</Link>
          </nav>
          <Button variant="text">{!auth.login ? "Вход" : "Выйти"}</Button>
        </>
      ) : null}
    </header>
  );
};

export default Header;
