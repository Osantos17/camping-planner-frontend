import axios from "axios"
import { useState, useEffect } from "react";
import { PostsIndex} from "./PostsIndex"
import { PostsShow} from "./PostsShow"
import { Modal } from "./Modal";

export function Content() {

  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    console.log("handleIndexPosts");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, [])

  const handleShowPost = () => {
    console.log("helllo");
  }



  return (
    <div>
      <PostsIndex posts={posts} />
      <button onClick = {handleShowPost}>Hiiii</button>
      <PostsShow />
      <Modal show={false}>
        <h2>Hiiiii</h2>
      </Modal>
    </div>
  );
}