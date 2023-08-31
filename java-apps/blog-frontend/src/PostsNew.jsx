export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <br />
        <div>
          Body: <input type="text" />
        </div>
        <br />
        <div>
          Image: <input type="text" />
        </div>
        <br />
        <button type="submit">Create post</button>
      </form>
    </div>
  );
}
