import { TfiComments, TfiDirectionAlt, TfiEnvelope } from "react-icons/tfi";
import styles from "./stylesHeader.module.css";
import { useState } from "react";
import Protf from "../portf/indexportf";
import Projeto from "../Projeto/indexProjeto";
import Contatos from "../contatos/indexContatos";

export default function Header() {
  const [activaTab, setActivaTab] = useState("Tab 1");
  function hendleChangeTab(tabNome) {
    setActivaTab(tabNome);
  }

  function renderTabContent() {
    switch (activaTab) {
      case "Tab 1":
        return <Protf />;
      case "Tab 2":
        return <Projeto />;
      case "Tab 3":
        return <Contatos />;
    }
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.caixaNav}>
          <button
            className={activaTab === "Tab 1" ? "active" : ""}
            onClick={() => hendleChangeTab("Tab 1")}
          >
            <TfiComments />
            Perf
          </button>

          <button
            className={activaTab === "Tab 2" ? "active" : ""}
            onClick={() => hendleChangeTab("Tab 2")}
          >
            <TfiDirectionAlt />
            Projeto
          </button>

          <button
            className={activaTab === "Tab 3" ? "active" : ""}
            onClick={() => hendleChangeTab("Tab 3")}
          >
            <TfiEnvelope />
            Contatos
          </button>
        </div>

        <div className={styles.tabContent}>{renderTabContent()}</div>
      </div>
    </>
  );
}
