import "./App.styles.css";
import { Header } from "./components/Header";

import LogoHousebook from "./assets/img/housebooklogo.png";
import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import fetchAlunos from "./services/api/http-api";

const App = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    fetchAlunos().then(setAlunos);
  }, []);

  return (
    <>
      <Header logo={LogoHousebook} />
      <main className="container">
        <div class="cards">
          {alunos.map(({ nome, avatar, bio, profissao }) => (
            <Card nome={nome} avatar={avatar} bio={bio} profissao={profissao} />
          ))}
        </div>
      </main>
    </>
  );
};

export default App;
