import { useState } from "react";
import "./styles/home.scss";

function App() {

  return (
    <main className="home">
      <h1 className="home__title">Desafios <span className="destaque">#boracodar</span></h1>
      <p className="home__subtitle">Desafios semanais lançados pela <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a></p>
      
    </main>
  );
}

export default App;
