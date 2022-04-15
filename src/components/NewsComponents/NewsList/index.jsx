import { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialiseFunc } from "../../../store/newsSlice";
import { checkAccessNews } from "../../../utils";
import NewsItem from "../NewsItem";
import styles from "./styles/index.module.scss";

const NewsList = memo(({ news }) => {
  const [success, setSuccess] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!news.length) {
      dispatch(
        initialiseFunc(() => {
          setSuccess(true);
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles["news-list"]}>
      {news.length ? (
        <ul className={styles["news-list__list"]}>
          {news.map((item) =>
            checkAccessNews(item.status, auth.role) ? (
              <li className={styles["news-list__item"]} key={item.id}>
                <NewsItem news={item} />
              </li>
            ) : null
          )}
        </ul>
      ) : success ? (
        <div className={styles["news-list__text"]}>Нет новостей</div>
      ) : (
        <div>Загрузка...</div>
      )}
    </div>
  );
});

export default NewsList;
