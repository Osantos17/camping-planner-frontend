export function PostsNew() {
  return (
    <div>
      <h1>New Posts</h1>
      <form>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Url: <input name="url" type="text" />
        </div>
        <div>
          Width: <input name="width" type="text" />
        </div>
        <div>
          Height: <input name="height" type="text" />
        </div>
        <button type="submit">Create post</button>
      </form>
    </div>
  );
}