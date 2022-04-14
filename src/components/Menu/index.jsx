import styles from "./styles/index.module.scss";
import { Button } from "../UI";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { MenuIcon, CloseIcon } from "../../images";
import { useState } from "react";
import classNames from "classnames";
import { PATHS } from "../../const";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const auth = useSelector((state) => state.auth);
  const { pathname } = useLocation();

  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Button variant="text" onClick={handleOpen}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </Button>
      <div className={classNames(styles.menu, { [styles.open]: open })}>
        <nav className={styles.menu__nav}>
          <Link
            className={classNames(styles.menu__link, {
              [styles.menu__link_active]: pathname === PATHS.NEWS,
            })}
            to={PATHS.NEWS}
          >
            Новости
          </Link>
        </nav>
        <Button variant="text">{!auth.login ? "Вход" : "Выйти"}</Button>
      </div>
    </>
  );
};

export default Menu;
