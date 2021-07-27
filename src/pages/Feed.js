import React from "react";
import Compose from "../components/compose/Compose";
import Post from "../components/Post/Post";
import { usePost } from "../reducer/postsReducer";

function Feed() {
  const { state } = usePost();

  return (
    <div>
      <Compose />
      {state.posts.map((post) => (
        <Post key={post.date} post={post} />
      ))}
    </div>
  );
}

export default Feed;
