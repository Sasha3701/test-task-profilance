import { Button, InputSearch } from "../UI";
import { useSelector } from "react-redux";
import NewsList from "./NewsList";
import { useMemo, useState } from "react";
import FormNews from "../FormNews";
import styles from "./styles/index.module.scss";
import { ROLES } from "../../const";

const NewsComponent = () => {
  const [search, setSearch] = useState("");
  const [newNews, setNewNews] = useState(false);
  const news = useSelector((state) => state.news.news);
  const auth = useSelector((state) => state.auth);

  const filterNews = useMemo(() => {
    return news.filter((item) => item.title.includes(search));
  }, [search, news]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleAdd = () => {
    setNewNews(true);
  };

  const handleCancel = () => {
    setNewNews(false);
  };

  return (
    <div className={styles.container}>
      <InputSearch
        style={{ marginBottom: "30px" }}
        value={search}
        onChange={handleChange}
        placeholder="Поиск новостей..."
      />
      <NewsList news={filterNews} />
      <div className={styles.container__form}>
        {auth.role !== ROLES.GUEST && !newNews ? (
          <Button onClick={handleAdd}>Добавить</Button>
        ) : null}
        {newNews ? <FormNews onCancel={handleCancel} /> : null}
      </div>
    </div>
  );
};

export default NewsComponent;
