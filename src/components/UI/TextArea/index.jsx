import classNames from "classnames";
import styles from "./styles/index.module.scss";

const TextArea = ({ classes, label, id, ...props }) => {
  return (
    <div className={classNames(styles.container, classes)}>
      <label className={styles.container__label} htmlFor={id}>
        {label}
      </label>
      <textarea  className={styles.container__textarea} id={id} {...props} />
    </div>
  );
};

export default TextArea;
