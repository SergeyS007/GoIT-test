import "./Tweets.css";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CardList from "../Components/CardList/CardList";
import LoadMore from "../Components/LoadMore/LoadMore";
import StatusFilter from "../Components/StatusFilter/StatusFilter";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchUsers, fetchUsersByPage } from "../redux/operations";
import { getError, getIsLoading, getQuantityToLoad } from "../redux/selectors";

const Tweets = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const quantityToLoad = useSelector(getQuantityToLoad);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const loadMore = () => {
    setPage((prevState) => prevState + 1);
    dispatch(fetchUsersByPage(page + 1));
  };
  return (
    <div className="tweets">
      <StatusFilter />
      <NavLink to={backLinkHref} className="navTweets">
        Back to HOME
      </NavLink>
      {isLoading && !error && <b>Request in progress...</b>}
      <CardList />
      {quantityToLoad === 8 && <LoadMore clickHandler={loadMore} />}
    </div>
  );
};

export default Tweets;
