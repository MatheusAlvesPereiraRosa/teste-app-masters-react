import "./index.css";

export const Button = ({ onClick }) => (
  <button onClick={onClick} className="btn-load">
    <div className="btn-text" type="button">
      Load more...
    </div>
  </button>
);
