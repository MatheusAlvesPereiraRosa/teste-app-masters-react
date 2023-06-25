import "./index.css";

export const Button = ({ onClick }) => (
  <button onClick={onClick} className="btn-load">
    <div className="btn-text">Load more...</div>
  </button>
);
