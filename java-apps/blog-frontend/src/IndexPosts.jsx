import { useState } from "react"

export function IndexPosts(props) {
  const [searchFilter, setSearchFilter] = useState("")

  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      <input type="text" value={searchFilter} onChange={event => setSearchFilter(event.target.value)} list="names"/>
      <datalist id ="names">
        {props.posts.map(post => (
          <option>{post.title}</option>
        ))}
        
      </datalist>
      {props.posts.filter(post => post.title.toLowerCase().includes(searchFilter.toLowerCase())).map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image_url} alt="" />
          <p className="d-inline-flex gap-1">
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">More Info
            </button>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
            <button>{post.body}</button>
          </div>
        </div>

        </div>
      ))}

    </div>
  );
}


