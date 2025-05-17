import { GiCheckMark } from "react-icons/gi";
import styles from "./stylePytohn.module.css";

export default function Python() {
  return (
    <>
      <div className={styles.tabPT}>
        <div className={styles.cardPT}>
          <div className={styles.python}>
            <p>
              <i>
                <GiCheckMark />
              </i>
              Desenvolvimento Web
            </p>
            <p>
              <i>
                <GiCheckMark />
              </i>
              Ciência de Dados e Análise
            </p>
            <p>
              <i>
                <GiCheckMark />
              </i>
              Automação e Scripting
            </p>
            <p>
              <i>
                <GiCheckMark />
              </i>
              Fintech e Setor Financeiro
            </p>
            <p>
              <i>
                <GiCheckMark />
              </i>
              Desenvolvimento de Software
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
