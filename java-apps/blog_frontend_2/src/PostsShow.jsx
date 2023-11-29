export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    console.log('submitting')
    props.onUpdatePost(props.post.id, params)
  }

  const handleClick = () => {
    console.log('click')
    props.onDestroyPost(props.post.id)
  }

  return (

    <div>
      <button onClick={handleClick}>Destroy Post</button>
      <p>Body: {props.post.body}</p>
      <p>Image: {props.post.image}</p>
      <br />
      <form onSubmit ={handleSubmit}>
        <div>
          Title:<br /><input type="text" name="input_title" defaultValue={props.post.title}/>
        </div>
        <div>
          Body:  <br /><input type="text" name="input_body" defaultValue={props.post.body}/>
        </div>
        <div>
          Image:  <br /><input type="text" name="input_image" defaultValue={props.post.image}/>
        </div>
        <br />
        <button type="submit">Edit post</button>
      </form>
    </div>
  );
}
