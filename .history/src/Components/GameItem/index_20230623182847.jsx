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
          <p>Data de lançamento: {releaseDate}</p>
          <p>{shortDescription}</p>
          <p>Plataforma: {platform}</p>
        </div>
      </div>
    </div>
  );
}

export default GameItem;
