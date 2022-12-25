import React from 'react'
import { useState } from 'react'
import {useParams} from "react-router-dom";
//import Swal from "sweetalert2";

function UpdateCarForm() {

  const {id}=useParams()
  const [car,setCar] = useState({
    brand:"",
    label:"",
    price:0
  })
 
  const getCarById = async()=>{

  }

  const updateCarHandler=async()=>{
    console.log('Car Updated Clicked',car)
  }

  return (
    <div className='container flex flex-col items-center justify-center p-2 m-4'>
      <h1 className='text-blue-700'>Update Car</h1>
      <form>
        <div className="mb-3">
          <label forhtml="brand" className="form-label">Brand</label>
          <input 
            type="text" 
            className="form-control" 
            id="brand" 
            aria-describedby="brand"
            required
            value={car.brand}
            onChange={(event)=>{
              setCar({...car,brand:event.target.value})
            }}
            />
            <div id="brand" className="form-text">Brand Description</div>
        </div>
        <div className="mb-3">
          <label forhtml="label" className="form-label">Label</label>
          <input 
          type="text" 
          className="form-control" 
          id="label"
          value={car.label}
          onChange={(event)=>{
            setCar({...car,label:event.target.value})
            }} />
        </div>
        <div className="mb-3">
          <label forhtml="price" className="form-label">Price</label>
          <input 
              type="number" 
              className="form-control" 
              id="price" 
              value={car.price}
              required
              onChange={(event)=>{
                setCar({...car,price:event.target.value})
              }}
              />
        </div>
       {/* <pre><code>{JSON.stringify(car,undefined,3)}</code></pre> */}
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={()=>updateCarHandler()}
          required
          >Update Car</button>
      </form>
    </div>
  )
}

export default UpdateCarForm
