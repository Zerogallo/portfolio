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

export default function Protf() {
  return (
    <>
      <Header />
      <div className={styles.contener}>
        <div className={styles.pref}>
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
    </>
  );
}
