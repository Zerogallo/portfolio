import { BiLogoMicrosoftTeams } from "react-icons/bi";
import styles from "./stylePytohn.module.css";
import { IoLogoPython } from "react-icons/io";
import { FaReact } from "react-icons/fa";

export default function Python() {
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
