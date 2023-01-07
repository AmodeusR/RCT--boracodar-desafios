import "./not-found.scss";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__description">Ops! Parece não há nada aqui!</p>
      <Link to="/" className="not-found__redirect">Voltar para a página inicial</Link>
    </div>
  );
};

export default NotFoundPage;
