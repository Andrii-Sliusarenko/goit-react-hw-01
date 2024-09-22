import style from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={style.container}>
      <img className={style.img} src={avatar} alt="Avatar" width="48" />
      <p className={style.name}>{name}</p>
      {isOnline ? (
        <p style={{ color: "rgb(13, 227, 13)" }}>Online</p>
      ) : (
        <p style={{ color: "red" }}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
