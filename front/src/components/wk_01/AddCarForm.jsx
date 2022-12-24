import React from 'react'
import { useState } from 'react'
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

function AddCarForm({addCar}) {
  const [car,setCar] = useState({
    brand:"",
    label:"",
    price:0
  })

  const navigate = useNavigate()

  const postNewCarHandler=async ()=>{
    await fetch("http://localhost:3030/cars/add",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(car)
    })
    .then(data=>data.json())
    .then(json=>{
      if(json.Error){
        Swal.fire({
          title: 'Error!',
          text: json.Error,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }else{
        Swal.fire({
          title: 'Add Car',
          text: 'Car Added Successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        navigate('/car-list')

      }
    })
    .catch(error=>console.log(error))
  }
  

  return (
    <div className='container p-2 m-4 flex items-center justify-center'>
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
          onClick={()=>postNewCarHandler()}
          required
          >Add Car</button>
      </form>
    </div>
  )
}

export default AddCarForm
