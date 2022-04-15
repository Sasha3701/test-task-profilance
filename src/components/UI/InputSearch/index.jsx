import classNames from "classnames";
import styles from "./styles/index.module.scss";

const InputSearch = ({ classes, ...props }) => {
  return (
    <input className={classNames(styles["input-search"], classes)} {...props} />
  );
};

export default InputSearch;
