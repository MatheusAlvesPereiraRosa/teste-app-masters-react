export function GameItem({
  title,
  thumbnail,
  shortDescription,
  genre,
  platform,
  releaseDate,
}) {
  return (
    <div>
      <img src={thumbnail} alt="Imagem do Jogo" />
      <h1>{title}</h1>
      <h3>{genre}</h3>
      <p>{releaseDate}</p>
      <p>{data.shortDescription}</p>
      <p>{platform}</p>
    </div>
  );
}

export default GameItem;
