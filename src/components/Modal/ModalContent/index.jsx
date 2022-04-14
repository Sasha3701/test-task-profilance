import styles from "./styles/index.module.scss";

const ModalContent = ({ hide }) => {
  const handleDeep = (e) => {
    e.stopPropagation();
  };

  return (
    <div onClick={hide} className={styles.container}>
      <div onClick={handleDeep} className={styles.window}>
        Test
      </div>
    </div>
  );
};

export default ModalContent;
