import styles from "./styles/index.module.scss";
import { Button, Input, TextArea } from "../UI";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addFunc } from "../../store/newsSlice";
import { v4 } from "uuid";

const FormNews = ({ onCancel }) => {
  const [news, setNews] = useState({
    title: "",
    text: "",
  });
  const dispatch = useDispatch();

  const handleAdd = () => {
    const data = { ...news, status: "check", id: v4() };
    dispatch(addFunc(data));
  };

  const handleChange = (e, type) => {
    const value = e.target.value;
    setNews((prevState) => ({ ...prevState, [type]: value }));
  };

  return (
    <div className={styles.form}>
      <Input
        classes={styles.form__input}
        onChange={(e) => handleChange(e, "title")}
        id="title"
        type="text"
        label="Название"
      />
      <TextArea
        classes={styles.form__textarea}
        onChange={(e) => handleChange(e, "text")}
        id="text"
        label="Описание"
      />
      <div className={styles.form__actions}>
        <Button onClick={handleAdd}>Добавить</Button>
        <Button onClick={onCancel} variant="text">
          Отмена
        </Button>
      </div>
    </div>
  );
};

export default FormNews;
