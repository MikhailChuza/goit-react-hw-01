import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.ProfileContainer}>
      <div className={styles.ProfileHead}>
        <img className={styles.ProfileImage} src={image} alt="User avatar" />
        <p className={styles.ProfileName}>{name}</p>
        <p className={styles.ProfileTag}>@{tag}</p>
        <p className={styles.ProfileLocation}>{location}</p>
      </div>

      <ul className={styles.ProfileInformation}>
        <li className={styles.ProfileInformationItem}>
          <span>Followers</span>
          <span className={styles.integer}>{stats.followers}</span>
        </li>

        <li className={styles.ProfileInformationItem}>
          <span>Views</span>
          <span className={styles.integer}>{stats.views}</span>
        </li>

        <li className={styles.ProfileInformationItem}>
          <span>Likes</span>
          <span className={styles.integer}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
