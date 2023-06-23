export function GameItem({ title, thumbnail }) {
  return (
    <div>
      <h1>{title}</h1>

      <img src={thumbnail} alt="Imagem do Jogo" />
    </div>
  );
}

export default GameItem;
