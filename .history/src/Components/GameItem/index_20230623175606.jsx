export const GameItem = ({ title, thumbnail }) => (
  <div>
    <h1>{title}</h1>

    <img src={thumbnail} alt="Imagem do Jogo" />
  </div>;
)
