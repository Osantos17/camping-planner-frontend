import axios from "axios"

export function PostsNew (props) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onCreatePost(params)
    event.target.reset();
  }

  return (
    <div id = "posts-new">
      <h1>New Post</h1>
      <form onSubmit ={handleSubmit}>
        <div>
          Title:<br /><input type="text" name="input_title"/>
        </div>
        <div>
          Body:  <br /><input type="text" name="input_body"/>
        </div>
        <div>
          Image:  <br /><input type="text" name="input_image"/>
        </div>
        <br />
        <button type="submit">Create post</button>
      </form>
    </div>
  );
}

