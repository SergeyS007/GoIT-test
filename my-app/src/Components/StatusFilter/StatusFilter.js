import { useSelector, useDispatch } from "react-redux";
import Button from "../../Components/Button/Button";
import { statusFilters } from "../../redux/constants";
import { getStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/filtersSlice";
import { AiOutlineCaretDown } from "react-icons/ai";
import "./StatusFilter.css";

const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className="dropdown">
      <span>
        Filter by status
        <AiOutlineCaretDown size={24} />
      </span>
      <div className="dropdown-content">
        <Button
          selected={filter === statusFilters.all}
          onClick={() => handleFilterChange(statusFilters.all)}
        >
          All
        </Button>
        <Button
          selected={filter === statusFilters.follow}
          onClick={() => handleFilterChange(statusFilters.follow)}
        >
          Follow
        </Button>
        <Button
          selected={filter === statusFilters.following}
          onClick={() => {
            handleFilterChange(statusFilters.following);
          }}
        >
          Following
        </Button>
      </div>
    </div>
  );
};

export default StatusFilter;
