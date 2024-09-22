import FriendListItem from "../friendListItem/FriendListItem";
import style from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={style.list}>
      {friends.map((FriendItem) => {
        return (
          <li className={style.item} key={FriendItem.id}>
            <FriendListItem
              name={FriendItem.name}
              avatar={FriendItem.avatar}
              isOnline={FriendItem.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
