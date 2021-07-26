import React from "react";
import { useState } from "react";
import styles from "./Compose.module.css";
import Img from "./profile.png";
import { AiFillCloseSquare, AiOutlineGif } from "react-icons/ai";
import { usePost } from "../../reducer/postsReducer";
import GifContainer from "./GifContainer";

function Compose() {
  const [text, setText] = useState("");
  const [gifUrl, setGifUrl] = useState(null);
  const [viewGif, setViewGif] = useState(false);
  const { state, dispatch } = usePost();

  async function submitHandler(e) {
    e.preventDefault();
    if (text.length || gifUrl) {
      dispatch({
        type: "ADD_NEW_POST",
        payload: { date: Date.now(), text, gifUrl },
      });
    }
    setText("");
    setGifUrl(null);
    setViewGif(false);
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
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <hr className={styles.shareHr} />
        {gifUrl && (
          <div className={styles.shareImgContainer}>
            <img className={styles.shareImg} src={gifUrl} alt="" />
            <AiFillCloseSquare
              className={styles.shareCancelImg}
              onClick={() => setGifUrl(null)}
              size={24}
              color="#fff"
            />
          </div>
        )}
        <form className={styles.shareBottom} onSubmit={submitHandler}>
          <div
            className={styles.shareOptions}
            onClick={() => setViewGif((prev) => !prev)}
          >
            <span className={styles.shareOptionText}>GIF</span>
          </div>
          {viewGif && <GifContainer setGifUrl={setGifUrl} />}
          <button className={styles.shareButton} type="submit">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Compose;
