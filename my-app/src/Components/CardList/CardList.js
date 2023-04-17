import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { getUsers, getStatusFilter } from "../../redux/selectors";
import "./CardList.css";
import { statusFilters } from "../../redux/constants";

const getVisibleCards = (users, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.follow:
      return users.filter((user) => !user.following);
    case statusFilters.following:
      return users.filter((user) => user.following);
    default:
      return users;
  }
};

const CardList = () => {
  const users = useSelector(getUsers);
  const statusFilter = useSelector(getStatusFilter);
  const visibleUsers = getVisibleCards(users, statusFilter);

  return (
    <ul className="list">
      {visibleUsers.map((user) => (
        <li className="listItem" key={user.id}>
          <Card user={user} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
