import "./index.css";

export const Button = ({ onClick }) => (
  <button onClick={onClick} className="btn-load">
    <div className="btn-text" typeof="button">
      Load more...
    </div>
  </button>
);
