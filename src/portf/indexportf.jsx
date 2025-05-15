import { GoCodeReview } from "react-icons/go";

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
import image from "../imag/fotodopref.jpg";

export default function Protf() {
  return (
    <>
      <div className={styles.contener}>
        <div className={styles.pref} id="up">
          <span className={styles.anime}>
            <GoCodeReview />
          </span>

          <img src={image} alt="img" />
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
                <a href="https://www.linkedin.com/in/renan-ferreira-44b944311/">
                  <FaLinkedin />
                  Linkedin
                </a>
              </button>

              <button>
                <a href="https://github.com/Zerogallo">
                  <FaGithub />
                  Github
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
