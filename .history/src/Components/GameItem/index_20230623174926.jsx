export const GameItem = ({ data }) => {
  <div>
    <h1>{data.title}</h1>

    <img src={data.thumbnail} alt="Imagem do Jogo" />
  </div>;
};
