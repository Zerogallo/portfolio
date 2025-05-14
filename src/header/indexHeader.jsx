import styles from "./stylesHeader.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.caixaNav}>
          <a href="#" di="up">
            Pref
          </a>
          <a href="#" di="meio">
            Currícula
          </a>
          <a href="#" di="down">
            Projeto
          </a>
        </div>
      </div>
    </>
  );
}
