import React from "react";
import { Link } from "react-router-dom";
import "./challenge-card.scss";

type ChallengeCardProps = {
  image: string;
  title: string;
  description: string;
  dir: string;
};

const ChallengeCard = ({ image, title, description, dir }: ChallengeCardProps) => {
  return (
    <div className="challenge-card">
      <img
        className="challenge-card__cover"
        src={image}
        alt="Challenge cover"
      />
      <h2 className="challenge-card__title">{title}</h2>
      <p className="challenge-card__description">{description}</p>
      <Link to={`/desafios/${dir}`} className="challenge-card__button">Ver desafio</Link>
    </div>
  );
};

export default ChallengeCard;
