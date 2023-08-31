export function IndexPosts(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {props.posts.map((post) => (
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


