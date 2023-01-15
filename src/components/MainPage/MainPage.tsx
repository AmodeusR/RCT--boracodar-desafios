import { MusicPlayerCover } from "../../assets/images";
import ChallengeCard from "../ChallengeCard/ChallengeCard";

const challenges = [
  {
    title: "Music player",
    description:
      "Criação um player de música que reproduz e mostra dados da música em tempo real.",
    image: MusicPlayerCover,
    dir: "music-player"
  }
];

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

      <section className="home__challenges">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.dir} {...challenge}  />
        ))}
      </section>
    </main>
  );
};

export default MainPage;
