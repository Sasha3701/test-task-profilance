import styles from "./styles/index.module.scss";
import { Button, Input } from "../../UI";
import { CloseIcon } from "../../../images";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginFunc } from "../../../store/authSlice";

const ModalContent = ({ hide }) => {
  const [credentions, setCredentions] = useState({
    login: "",
    password: "",
  });
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleDeep = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = () => {
    dispatch(loginFunc(credentions, hide));
  };

  const handleChange = (e, type) => {
    const value = e.target.value;
    setCredentions((prevState) => ({ ...prevState, [type]: value }));
  };

  return (
    <div onClick={hide} className={styles.container}>
      <div onClick={handleDeep} className={styles.window}>
        <h1 className={styles.window__title}>Авторизация</h1>
        <Input
          value={credentions.login}
          className={styles.window__input}
          onChange={(e) => handleChange(e, "login")}
          id="login"
          type="text"
          label="Логин"
        />
        <Input
          className={styles.window__input}
          value={credentions.password}
          onChange={(e) => handleChange(e, "password")}
          id="password"
          type="password"
          label="Пароль"
        />
        {error ? (
          <div className={styles.window__message}>Не корректные данные</div>
        ) : null}
        <Button onClick={handleSubmit}>Войти</Button>
        <div className={styles["window__button-close"]}>
          <Button onClick={hide} variant="text">
            <CloseIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
