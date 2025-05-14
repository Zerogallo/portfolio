import { TfiComments, TfiDirectionAlt, TfiEnvelope } from "react-icons/tfi";
import styles from "./stylesHeader.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.caixaNav}>
          <a href="#" id="up">
            <TfiComments />
            Pref
          </a>
          <a href="#" id="meio">
            <TfiEnvelope />
            Currícula
          </a>
          <a href="#" id="down">
            <TfiDirectionAlt />
            Projeto
          </a>
        </div>
      </div>
    </>
  );
}
