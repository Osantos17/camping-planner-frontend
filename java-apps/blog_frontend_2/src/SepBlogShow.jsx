import axios from "axios"
import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

export function SepBlogShow() {
  const [post, setPost] = useState({})
  const params = useParams();
  
  const getPostData = () => {
    console.log('gettting post data...') 
    console.log(params)       
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then(response => {
      console.log(response)
      setPost(response.data)
    })
  }

  useEffect(getPostData, [])

  return(
    <div>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
      <p><img src={post.image} /></p>  
    </div>
  );
}