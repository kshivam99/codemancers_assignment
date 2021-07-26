import React from "react";
import styles from "./Post.module.css";
import profileImage from "../Compose/profile.png";

function Post({ post }) {
  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <img className={styles.postProfileImg} src={profileImage} alt="" />
            <span className={styles.postUsername}>Shivam</span>
            <span className={styles.postDate}>{post.date}</span>
          </div>
        </div>
        <div className={styles.postCenter}>
          <span className={styles.postText}>{post.text}</span>
          <img className={styles.postImg} src={post.gifUrl} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Post;
