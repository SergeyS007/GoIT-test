import "./Card.css";
import { useDispatch } from "react-redux";
import { Logo } from "../Logo/Logo";
import { toggleFollowing } from "../../redux/operations";

const Card = ({ user }) => {
  const dispatch = useDispatch();
  const handleToggle = () => dispatch(toggleFollowing(user));
  return (
    <div className="wrapper">
      <Logo />
      <div className="wrapperImg"></div>
      <div className="wrapperLine"></div>
      <div className="wrapperEllipse">
        <img src={user.avatar} alt="" className="centerImg" />
      </div>
      <p className="tweets">{user.tweets} tweets</p>
      <p className="followers">
        {user.followers > 999
          ? (user.followers / 1000).toFixed(3)
          : user.followers}{" "}
        Followers
      </p>
      <button
        className={!user.following ? "button" : "following"}
        onClick={handleToggle}
      >
        <span className="span">{user.following ? "Following" : "Follow"} </span>
      </button>
    </div>
  );
};

export default Card;
