import React from 'react'


function CarList({ cars }) {
  return (
    <div>
      <h1>Car List</h1>
      <input
        type="text"
        placeholder="Search ..."
      />
      <hr />
      <table className="table table-tripped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Brand</th>
            <th scope="col">Label</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {cars.length === 0 ? <tr><td>No Cars Found</td></tr> :
            (
              cars.map((car, index) => (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{car.brand}</td>
                  <td>{car.label}</td>
                  <td>{car.price}</td>
                </tr>)
              )
            )}
        </tbody>
      </table>


    </div>
  )
}

export default CarList
