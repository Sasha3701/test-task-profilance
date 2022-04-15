import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { ROLES, STATUS } from "../../../const";
import { Button } from "../../UI";
import { DeleteIcon, OkIcon } from "../../../images";
import { deleteFunc, okFunc } from "../../../store/newsSlice";
import styles from "./styles/index.module.scss";

const NewsItem = ({ news }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { text, title, date, status, id } = news;

  const handleDelete = () => {
    dispatch(deleteFunc(id));
  };

  const handleOk = () => {
    dispatch(okFunc(id));
  };

  return (
    <div
      className={classNames(styles.news, {
        [styles.news_checked]: status === STATUS.CHECK,
      })}
    >
      <div className={styles.news__header}>
        <h2 className={styles.news__title}>{title}</h2>
        <p className={styles.news__date}>
          {new Date(date).toLocaleDateString("en-US")}
        </p>
      </div>
      <div className={styles.news__body}>{text}</div>
      {auth.role === ROLES.ADMIN ? (
        <div className={styles.news__buttons}>
          {status === STATUS.CHECK ? (
            <Button onClick={handleOk} variant="text">
              <OkIcon />
            </Button>
          ) : null}
          <Button onClick={handleDelete} variant="text">
            <DeleteIcon />
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default NewsItem;
