import "./index.css";

export const Button = ({ onClick }) => (
  <button onClick={onClick} className="btn-load">
    <p>Load more data</p>
  </button>
);
