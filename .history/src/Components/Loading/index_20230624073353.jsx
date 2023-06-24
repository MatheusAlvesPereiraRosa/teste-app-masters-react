import "./index.css";

export const Loading = ({isLoading}) => (
  {isLoading && {
  <div className="loader-container">
    <div className="smooth-loader" />
  </div>
  }
); 
