import classNames from "classnames";
import styles from "./styles/index.module.scss";

const Button = ({ children, variant = "base", size = "md", ...props }) => {
  return (
    <button
      className={classNames(`${styles.button}`, {
        [styles.button_size_sm]: size === "sm",
        [styles.button_size_md]: size === "md",
        [styles.button_size_lg]: size === "lg",
        [styles.button_type_text]: variant === "text",
		[styles.button_type_base]: variant === "base",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
