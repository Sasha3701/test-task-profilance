import classNames from "classnames";
import styles from "./styles/index.module.scss";

const Input = ({ label, id, classes, ...props }) => {
  return (
    <div className={classNames(styles.container, classes)}>
      <label className={styles.container__label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.container__input} id={id} {...props} />
    </div>
  );
};

export default Input;
