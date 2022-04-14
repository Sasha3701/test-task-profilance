import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../UI";
import { LogoIcon } from "../../images";
import { useWindowSize, useModal } from "../../hooks";
import styles from "./styles/index.module.scss";
import { BREAKPOINTS } from "../../const";
import classNames from "classnames";
import { PATHS } from "../../const";
import Menu from "../Menu";
import Modal from "../Modal";

const Header = () => {
  const { width } = useWindowSize();
  const auth = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isShowing, toggle } = useModal();

  const handleRedirectToMain = () => {
    navigate(PATHS.MAIN);
  };

  const handleModal = () => {
    if (auth.login) {
      return;
    }
    toggle();
  };

  return (
    <>
      <header className={styles.header}>
        <LogoIcon
          onClick={handleRedirectToMain}
          className={styles.header__logo}
        />
        {width > BREAKPOINTS.md ? (
          <>
            <nav className={styles.header__nav}>
              <Link
                className={classNames(styles.header__link, {
                  [styles.header__link_active]: pathname === PATHS.NEWS,
                })}
                to={PATHS.NEWS}
              >
                Новости
              </Link>
            </nav>
            <Button onClick={handleModal} variant="text">
              {!auth.login ? "Вход" : "Выйти"}
            </Button>
          </>
        ) : (
          <Menu />
        )}
      </header>
      <Modal isShowing={isShowing} hide={toggle} />
    </>
  );
};

export default Header;
