import { BiLogoMicrosoftTeams } from "react-icons/bi";
import styles from "./stylesCard.module.css";
import { IoLogoPython } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import CardCT from "../cardMicrosoft/indexCardCT";
import Python from "../cardPython/indexPuthon";
import { useState } from "react";
import React from "../cardReact/indexReact";

export default function Card() {
  const [activacard, setActivacard] = useState("Tab 1");
  function hendleChangecard(tabNome) {
    setActivacard(tabNome);
  }

  function rendercardContent() {
    switch (activacard) {
      case "card 1":
        return <CardCT />;
      case "card 2":
        return <Python />;
      case "card 3":
        return <React />;
    }
  }
  return (
    <>
      <div className={styles.caixaCD}>
        <div className={styles.card}>
          <button
            className={activacard === "card 1" ? "active" : ""}
            onClick={() => hendleChangecard("card 1")}
          >
            <BiLogoMicrosoftTeams />
          </button>
          <button
            className={activacard === "card 2" ? "active" : ""}
            onClick={() => hendleChangecard("card 2")}
          >
            <IoLogoPython />
          </button>
          <button
            className={activacard === "card 3" ? "active" : ""}
            onClick={() => hendleChangecard("card 3")}
          >
            <FaReact />
          </button>
        </div>

        <div className={styles.tabContent}>{rendercardContent()}</div>
      </div>
    </>
  );
}
