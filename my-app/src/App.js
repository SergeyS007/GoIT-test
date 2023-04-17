// import logo from "./logo.svg";

// import CardList from "./Components/CardList/CardList";
// import LoadMore from "./Components/LoadMore/LoadMore";
// import { useDispatch, useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import { fetchUsers, fetchUsersByPage } from "./redux/operations";
// import { getError, getIsLoading } from "./redux/selectors";

// function App() {
//   const [page, setPage] = useState(1);
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const loadMore = () => {
//     setPage((prevState) => prevState + 1);
//     // setIsShown(true);
//     console.log(page + 1);
//     dispatch(fetchUsersByPage(page + 1));
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>GoIT-test</p>
//       </header>
//       <CardList />
//       <LoadMore clickHandler={loadMore} />
//     </div>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { SharedLayout } from "./Components/SharedLayout/SharedLayout";
import Tweets from "./pages/Tweets";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
