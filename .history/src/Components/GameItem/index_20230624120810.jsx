import "./index.css";

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

        <p>{shortDescription}</p>

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
