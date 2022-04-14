import { useSelector } from "react-redux";
import styles from "./styles/index.module.scss";

const Greeting = () => {
  const { login, firstName, lastName } = useSelector((state) => state.auth);

  return (
    <p className={styles.greeting}>
      Привет, {login ? `${firstName} ${lastName}` : "Гость"}!
    </p>
  );
};

export default Greeting;
