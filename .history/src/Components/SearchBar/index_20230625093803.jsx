import "./index.css";
import P from "prop-types";

export const SearchBar = ({ searchValue, handleChange }) => (
  <input
    type="search"
    className="search-input"
    placeholder="Digite sua pesquisa"
    value={searchValue}
    onChange={handleChange}
  />
);

SearchBar.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
