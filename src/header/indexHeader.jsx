import { TfiComments, TfiDirectionAlt, TfiEnvelope } from "react-icons/tfi";
import styles from "./stylesHeader.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.caixaNav}>
          <a href="#" di="up">
            <TfiComments />
            Pref
          </a>
          <a href="#" di="meio">
            <TfiEnvelope />
            Currícula
          </a>
          <a href="#" di="down">
            <TfiDirectionAlt />
            Projeto
          </a>
        </div>
      </div>
    </>
  );
}
