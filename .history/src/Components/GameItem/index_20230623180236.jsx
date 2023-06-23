export function GameItem({ title, thumbnail }) {
  return (
    <div>
      <img src={thumbnail} alt="Imagem do Jogo" />

      <h1>{title}</h1>

      <h2></h2>
    </div>
  );
}

export default GameItem;
