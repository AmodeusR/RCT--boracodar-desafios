import React from "react";

const MainPage = () => {
  return (
    <main className="home">
      <h1 className="home__title">
        Desafios <span className="destaque">#boracodar</span>
      </h1>
      <p className="home__subtitle">
        Desafios semanais lançados pela{" "}
        <a
          className="external"
          href="https://rocketseat.com.br/"
          target="_blank"
        >
          Rocketseat
        </a>
      </p>
    </main>
  );
};

export default MainPage;
