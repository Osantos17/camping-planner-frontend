export function HousesIndex (props) {
  return(
    <div>
      <h1>All Houses</h1>
      {props.houses.map((house) => (
      <div key={house.id}>
        <h2>{house.address}</h2>
        <p>{house.squarefeet}</p>
        <p>{house.bedrooms}</p>
        <p>{house.bathroom}</p>
      </div>
      ))}
    </div>
  )
}