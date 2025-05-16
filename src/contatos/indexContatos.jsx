import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./stylesContatos.module.css";
import image from "../imag/fotodopref.jpg";
import { TfiEmail } from "react-icons/tfi";
import CardCT from "../cardContato/cardMicrosoft/indexCardCT";
import Card from "../cardContato/cardNav/indexcard";

export default function Contatos() {
  return (
    <>
      <div className={styles.corric}>
        <div className={styles.caixaCatao}>
          <img src={image} alt="img" />

          <p className={styles.caixaNome}>Renan ferreira </p>
          <p className={styles.caixaCart}>Desenvolvedor Front-end</p>
          <p className={styles.iconEmail}>
            <a href="#">
              <TfiEmail />
            </a>
            renan.genesisgt724532@gmail.com
          </p>
          <div className={styles.caixaButt}>
            <button>
              <a href="https://www.linkedin.com/in/renan-ferreira-44b944311/">
                <FaLinkedin />
              </a>
            </button>

            <button>
              <a href="https://github.com/Zerogallo">
                <FaGithub />
              </a>
            </button>
          </div>
        </div>
        <div className={styles.caixaCorr}>
          <Card />
        </div>
      </div>
    </>
  );
}
