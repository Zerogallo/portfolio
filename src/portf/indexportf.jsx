import { GoCodeReview } from "react-icons/go";
import Header from "../header/indexHeader";
import styles from "./stylesportf.module.css";
import { VscVscodeInsiders } from "react-icons/vsc";
import {
  FaCss3Alt,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaNode,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { GrDocumentPdf } from "react-icons/gr";

export default function Protf() {
  return (
    <>
      <Header />
      <div className={styles.contener}>
        <div className={styles.pref} di="up">
          <span className={styles.anime}>
            <GoCodeReview />
          </span>

          <img src="/public/fotodopref.jpg" alt="img" />
          <span className={styles.anime2}>
            <VscVscodeInsiders />
          </span>

          <div className={styles.caixa}>
            <div className={styles.icon}>
              <FaReact />
            </div>
            <div className={styles.listIcon}>
              <p>
                <FaNode />
                <FaNodeJs />
                <FaCss3Alt />
                <FaPython />
                <FaJava />
                <SiVite />
              </p>
            </div>
            <div className={styles.nome}>
              <p>
                Renan <span>Portfólio</span>
              </p>
            </div>
            <div className={styles.text}>
              <p>
                Olá! Sou Renan, um programador apaixonado por tecnologia e
                soluções inovadoras. Com habilidades em Python, JavaScript,
                React, etc., adoro transformar problemas em códigos eficientes e
                funcionais.
              </p>
            </div>
            <div className={styles.bot}>
              <button>
                <FaLinkedin />
                Linkedin
              </button>

              <button>
                <FaGithub />
                Github
              </button>
            </div>
          </div>
        </div>
      </div>

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
