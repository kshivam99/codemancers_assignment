import React from "react";
import { useState } from "react";
import styles from "./Compose.module.css";
import Img from "./profile.png";
import { AiFillCloseSquare, AiOutlineGif } from "react-icons/ai";

function Compose() {
  const [newPost, setNewPost] = useState({ text: "", gif: "" });
  const [gifUrl, setGifUrl] = useState(null);
  const [viewGif, setViewGif] = useState(false);
  const { text, gif } = newPost;

  async function submitHandler(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    let { name, value } = e.target;

    setNewPost((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className={styles.share}>
      <div className={styles.shareWrapper}>
        <div className={styles.shareTop}>
          <img className={styles.shareProfileImg} src={Img} alt="profile pic" />
          <textarea
            name="text"
            placeholder="Write something here..."
            className={styles.shareInput}
            value={text}
            onChange={handleChange}
          />
        </div>
        <hr className={styles.shareHr} />
        {gifUrl && (
          <div className={styles.shareImgContainer}>
            <img className={styles.shareImg} src={gifUrl} alt="" />
            <AiFillCloseSquare
              className={styles.shareCancelImg}
              onClick={() => setGifUrl(null)}
            />
          </div>
        )}
        <form className={styles.shareBottom} onSubmit={submitHandler}>
          <div
            className={styles.shareOptions}
            onClick={() => setViewGif((prev) => !prev)}
          >
            <AiOutlineGif color="#fff" className={styles.shareIcon} />
            <span className={styles.shareOptionText}>GIF</span>
          </div>
          <button className={styles.shareButton} type="submit">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Compose;
