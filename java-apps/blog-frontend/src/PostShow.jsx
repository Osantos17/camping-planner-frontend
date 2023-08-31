export function PostShow(props) {
  console.log(props.post)
  return (
    <div>
      <p>{props.post.body}</p>
    </div>
  );
}