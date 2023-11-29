import { useState } from "react"

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState ("")

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <input type="text" value={searchFilter} onChange={event => setSearchFilter(event.target.value)} list="titles" />      
      <datalist id="titles">
        {props.posts.map(post => (
          <option>{post.title}</option>
        ))}
      </datalist>
      <div className="row row-cols-1 row-cols-md-2 g-4">
      {props.posts.filter(post => post.title.toLowerCase().includes(searchFilter.toLowerCase())).map((post) => (
        <div key={post.id} className="col-md-6">
          <div className="card">
            <img src={post.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <button onClick={() => props.onShowPost(post)}>More Info </button>
              <a href={`/posts/${post.id}`}>Go to show page</a>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
  }


