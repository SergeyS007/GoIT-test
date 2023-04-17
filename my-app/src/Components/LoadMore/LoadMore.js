import "./LoadMore.css";

const LoadMore = ({ clickHandler }) => {
  return (
    <button className={"buttonLoadMore"} onClick={clickHandler}>
      <span className="span">LoadMore</span>
    </button>
  );
};
export default LoadMore;
