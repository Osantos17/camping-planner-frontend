export function HousesNew (props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target); 
    props.onCreateHouse(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New House</h1>
      <form onSubmit = {handleSubmit}>
        <div>
          Address: <br /><input name="address" type="text" />
        </div>
        <div>
          Squarefeet: <br /><input name="squarefeet" type="text" />
        </div>
        <div>
          Bedrooms: <br /><input name="bedrooms" type="text" />
        </div>
        <div>
          Bathrooms: <br /><input name="bathrooms" type="text" />
        </div>
        <button type="submit">Add House</button>
      </form>
    </div>
  )
}