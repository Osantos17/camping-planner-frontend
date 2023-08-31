import { useState, useEffect } from "react";
import axios from 'axios';
import { PostsNew } from "./PostsNew";
import { IndexPosts } from "./IndexPosts";
import { Modal } from "./Modal";
import { PostShow } from "./PostShow";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState(false);

  const handleIndexPosts = () => {
    console.log('helloooooo');

    axios.get('http://localhost:3000/posts.json').then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });

  };
  
  useEffect(handleIndexPosts, []);


  const handleShowPost = (post) =>{ 
    console.log(post)
    setCurrentPost(post)
    console.log('showing post...')
    setIsPostsShowVisible(true);
  }

  const handleClose = () => {
    console.log('closing post...')
    setIsPostsShowVisible(false);
  }

  return (
    <div className="container">
      <div>
        <PostsNew />
        <br />
        <IndexPosts posts={posts} onShowPost={handleShowPost} />
        <Modal show={isPostsShowVisible} onClose={handleClose}>
          <div>
            <PostShow post={currentPost}/>
          </div>
        </Modal>
      </div>
    </div>
  );
}
