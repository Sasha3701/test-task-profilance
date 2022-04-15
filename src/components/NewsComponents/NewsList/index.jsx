import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsItem from "../NewsItem";
import styles from "./styles/index.module.scss";

const NewsList = () => {
  const [success, setSuccess] = useState(false);
  const { news, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!news.length) {
      dispatch(() => {
        setSuccess(true);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      {news.length ? (
        <ul>
          <li>
            <NewsItem />
          </li>
        </ul>
      ) : success ? (
        <div>Нет новостей</div>
      ) : (
        <div>Загрузка...</div>
      )}
    </div>
  );
};

export default NewsList;
