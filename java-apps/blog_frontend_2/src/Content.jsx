import axios from "axios";
import { useState, useEffect } from "react";
import {PostsNew} from "./PostsNew";
import {PostsIndex} from "./PostsIndex";
import {PostsShow} from "./PostsShow";
import {Modal} from "./Modal";
import {Signup} from "./Signup";
import {Login} from "./Login";
import {SepBlogShow} from "./SepBlogShow";

import {About} from './About';
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState([false]);
  const [currentPost, setCurrentPost] = useState({});

  const handlePostsIndex =() => {
    axios.get('http://localhost:3000/posts.json').then((response) => {
      setPosts(response.data);
    });
  };

  useEffect(handlePostsIndex, []);
    const handleShowPost = (post) => {
      setCurrentPost(post);
      setIsPostsShowVisible(true);
    }

    const handleClose = () => {
      setIsPostsShowVisible(false)
    }

    const handleCreatePost = (params) => {
      axios.post("http://localhost:3000/posts.json", params).then(response => {
        console.log(response.data)
        setPosts([...posts, response.data])
      })
    }

  const handleUpdatePost = (id, params) => {
    console.log('handling update post')
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then(response => {
      console.log(response.data);
      setCurrentPost(response.data);
      setPosts(
        posts.map(post => {
          if (post.id === id) {
            return response.data;
          } else {
            return post;
          }
        })
      )
    })
  }

  const handleDestroyPost = (id) => {
    console.log('destroying post...')
    // make the web request here
    axios.delete(`http://localhost:3000/posts/${id}.json`).then(response => {
      console.log(response.data)
      // close the modal
      handleClose()
      // delete from the posts array
      setPosts(
        posts.filter(post => id !== post.id)
      )      
    })
  }

  
  return (
    <div className="container">
      
      <Routes>
        <Route path = "/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path = "/Posts/new" element={<PostsNew onCreatePost={handleCreatePost} /> } />
        <Route path = "/Posts" element={<PostsIndex posts={posts} onShowPost = {handleShowPost} /> } />
        <Route path = "/Posts/:id" element = {<SepBlogShow />} />
      </Routes>
      
      {/* <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} /> 
      </Modal> */}
    </div>
  );
}


