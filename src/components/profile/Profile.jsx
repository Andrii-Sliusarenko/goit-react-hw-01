import style from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={style.userInfo}>
      <div className={style.img}>
        <img className={style.icon} src={image} alt="User avatar" />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.list}>
        <li className={style.item}>
          <span className={style.sp}>Followers</span>
          <span className={style.stat}>{stats.followers}</span>
        </li>
        <li className={style.item}>
          <span className={style.sp}>Views</span>
          <span className={style.stat}>{stats.views}</span>
        </li>
        <li className={style.item}>
          <span className={style.sp}>Likes</span>
          <span className={style.stat}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
