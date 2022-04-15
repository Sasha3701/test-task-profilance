import { memo } from "react";
import { useSelector } from "react-redux";
import { checkAccessNews } from "../../../utils";
import NewsItem from "../NewsItem";
import styles from "./styles/index.module.scss";

const NewsList = memo(({ news }) => {
  const auth = useSelector((state) => state.auth);

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
      ) : (
        <div className={styles["news-list__text"]}>Нет новостей</div>
      )}
    </div>
  );
});

export default NewsList;
