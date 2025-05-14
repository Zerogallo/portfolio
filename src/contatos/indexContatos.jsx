import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./stylesCurriculo.module.css";

import { GrDocumentPdf } from "react-icons/gr";

export default function Curriculo() {
  return (
    <>
      <div className={styles.corric}>
        <div className={styles.caixaCatao}>
          <img src="/public/fotodopref.jpg" alt="img" />

          <p className={styles.caixaNome}>Renan ferreira </p>
          <p className={styles.caixaCart}>Desenvolvedor Front-end</p>
          <p>renan.genesisgt724532@gmail.com</p>
          <div className={styles.caixaButt}>
            <button>
              <FaLinkedin />
            </button>

            <button>
              <FaGithub />
            </button>
          </div>
        </div>
        <div className={styles.caixaCorr}>
          <div className={styles.caixaDow}>
            <h1>
              <GrDocumentPdf /> Currículo
            </h1>
          </div>
          <div className={styles.caixaPDF}></div>
        </div>
      </div>
    </>
  );
}
