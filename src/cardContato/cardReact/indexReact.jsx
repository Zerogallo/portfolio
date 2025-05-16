import { BiLogoMicrosoftTeams } from "react-icons/bi";
import styles from "./stylesReact.module.css";
import { IoLogoPython } from "react-icons/io";
import { FaReact } from "react-icons/fa";

export default function React() {
  return (
    <>
      <div className={styles.tabPT}>
        <button>
          <BiLogoMicrosoftTeams />
        </button>
        <IoLogoPython />
        <FaReact />
      </div>
    </>
  );
}
