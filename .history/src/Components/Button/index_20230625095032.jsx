import "./index.css";
import P from "prop-types";

export const Button = ({ onClick }) => (
  <button onClick={onClick} type="button" className="btn-load">
    <div className="btn-text">Load more...</div>
  </button>
);

Button.propTypes = {
  onClick: P.func.isRequired,
};
