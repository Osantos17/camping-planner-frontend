export function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div>
      <h1>All Post</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image_url} />
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}