import "./index.css";
import P from "prop-types";

export const GameItem = ({
  title,
  thumbnail,
  shortDescription,
  genre,
  platform,
  releaseDate,
}) => {
  return (
    <div className="card-item">
      <img src={thumbnail} alt="Imagem do Jogo" />

      <div className="text-container">
        <h1>{title}</h1>
        <h3>{genre}</h3>

        <div className="text-container_description">
          <p>{shortDescription}</p>
        </div>

        <div className="text-container_little">
          <p>
            Data de lançamento: <br /> {releaseDate}
          </p>
          <p>
            Plataforma: <br />
            {platform}
          </p>
        </div>
      </div>
    </div>
  );
};

GameItem.propTypes = {
  title: P.string.isRequired,
  thumbnail: P.string.isRequired,
  shortDescription: P.string,
  genre: P.string,
  platform: P.string,
  releaseDate: P.string,
};
