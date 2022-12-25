import React from 'react'
import { useRef, useEffect } from 'react'
import { useParams } from "react-router-dom";

//import Swal from "sweetalert2";

function UpdateCarForm() {

  const { id } = useParams()
  const brand = useRef();
  const label = useRef();
  const price = useRef();
  const form = useRef();


  useEffect(() => {
    const getCarById = async (id) => {
      await fetch(`http://localhost:3030/cars/one/${id}`)
        .then(data => data.json())
        .then(json => json.message)
        .then(json => {

          brand.current.value = json[0].brand;
          label.current.value = json[0].label;
          price.current.value = json[0].price
        })
        .catch(error => console.log(error))

    }
    getCarById(id)

  }, [id])

  const updateCarHandler = async (e) => {
    e.preventDefault();
    const newCar = {
      brand: brand.current.value,
      label: label.current.value,
      price: price.current.value
    }
   

     await fetch(`http://localhost:3030/cars/update/${id}`,{
      method:"PUT",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(newCar)
     }).then(console.log)

  }

  return (
    <div className='container flex flex-col items-center justify-center p-2 m-4'>
      <h1 className='text-blue-700'>Update Car</h1>
      <form onSubmit={updateCarHandler} ref={form}>
        <div className="mb-3">
          <label forhtml="brand" className="form-label">Brand</label>
          <input
            ref={brand}
            name="brand"
            type="text"
            className="form-control"
            id="brand"
            aria-describedby="brand"
            required
            placeholder='Type price here'
          />
          <div id="brand" className="form-text">Brand Description</div>
        </div>
        <div className="mb-3">
          <label forhtml="label" className="form-label">Label</label>
          <input
            ref={label}
            type="text"
            name="label"
            className="form-control"
            id="label"
            placeholder='Type price here'
          />
        </div>
        <div className="mb-3">
          <label forhtml="price" className="form-label">Price</label>
          <input
            ref={price}
            name="price"
            type="number"
            className="form-control"
            id="price"
            required
            placeholder='Type price here'
          />
        </div>
        {/* <pre><code>{JSON.stringify(car,undefined,3)}</code></pre> */}
        <button
          type="submit"
          className="btn btn-primary"
        >Update Car</button>
      </form>
    </div>
  )
}

export default UpdateCarForm
