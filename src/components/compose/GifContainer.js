import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./GifContainer.module.css";

function GifContainer({ setGifUrl }) {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const results = await axios("https://api.giphy.com/v1/gifs/search", {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            q: query,
            limit: 25,
          },
        });
        setGifs(results.data.data);
        setLoading(false);
      } catch (err) {
          console.log(err);
          setLoading(false);
      }
    })();
  }, [query]);


  return (
        <div className={styles.container}>
          <input
            type="search"
            placeholder="search gifs"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.input}
          />
          <div className={styles.gifs}>
            {loading && <p style={{color:"#fff"}}>Loading....</p>}
            {!loading &&
              gifs.map((gif) => {
                return (
                  <img
                    src={gif.images.fixed_height.url}
                    className={styles.gif}
                    onClick={(e)=>setGifUrl(e.target.src)}
                    alt=""
                  />
                );
              })}
          </div>
        </div>
  );
}

export default GifContainer;
