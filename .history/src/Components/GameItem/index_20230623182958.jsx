import "./index.css";

export function GameItem({
  title,
  thumbnail,
  shortDescription,
  genre,
  platform,
  releaseDate,
}) {
  return (
    <div className="card-item">
      <img src={thumbnail} alt="Imagem do Jogo" />

      <div className="text-container">
        <h1>{title}</h1>
        <h3>{genre}</h3>

        <div className="text-container_little">
          <label>Data de lançamento:</label>
          <p>{releaseDate}</p>
          <p>{shortDescription}</p>
          <label>Plataforma:</label>
          <p>{platform}</p>
        </div>
      </div>
    </div>
  );
}

export default GameItem;
