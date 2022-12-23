import React from 'react'
import { useState } from 'react';
import AddCarForm from "./AddCarForm";
import CarList from "./CarList";

function Home() {
  const [cars,setCars] = useState([]);


  const addCar = (car)=>{
    setCars([...cars,car])
    console.log(cars)
  }

  return (
    <div className="container">

      <div className="row">
        <div className="col-6">
          <AddCarForm addCar={addCar}/>
        </div>
        <div className="col-6">
          <CarList cars={cars} />
        </div>
      </div>

    </div>
  )
}

export default Home

