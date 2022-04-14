import { useSelector, useDispatch } from "react-redux";
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
import { logoutUser } from "../../store/authSlice";

const Header = () => {
  const { width } = useWindowSize();
  const auth = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isShowing, toggle } = useModal();
  const dispatch = useDispatch();

  const handleRedirectToMain = () => {
    navigate(PATHS.MAIN);
  };

  const handleModalOrLogout = () => {
    if (auth.login) {
      dispatch(logoutUser());
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
            <Button onClick={handleModalOrLogout} variant="text">
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
