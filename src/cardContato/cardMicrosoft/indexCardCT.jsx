import { BiLogoMicrosoftTeams } from "react-icons/bi";
import styles from "./stylesCardCT.module.css";
import { GiCheckMark } from "react-icons/gi";
import { IoLogoPython } from "react-icons/io";
import { FaReact } from "react-icons/fa";

export default function CardCT() {
  return (
    <>
      <div className={styles.tabCard}>
        <button>
          <BiLogoMicrosoftTeams />
        </button>
        <IoLogoPython />
        <FaReact />

        <div className={styles.cardCT}>
          <div className={styles.caixaMC}>
            <div className={styles.microCheck}>
              <p>
                <i>
                  <GiCheckMark />
                </i>
                Microsoft word - avançado
              </p>
              <p>
                <i>
                  <GiCheckMark />
                </i>
                Microsoft excel - avançado
              </p>
              <p>
                <i>
                  <GiCheckMark />
                </i>
                Microsoft powerpoint - avançado
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
