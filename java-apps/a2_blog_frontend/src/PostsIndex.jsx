export function PostsIndex(props) {
  return (
    <div>
      {props.posts.map((post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src = {post.image} />
        </div>
      )))}
    </div>
  );
}