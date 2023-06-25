import "./index.css";
import P from 'prop-types';

export const Button = ({ onClick }) => (
  <button onClick={onClick} className="btn-load">
    <div className="btn-text" type="button">
      Load more...
    </div>
  </button>
);

Button.propTypes = {
  onClick.P: 
}
