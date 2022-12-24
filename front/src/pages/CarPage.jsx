import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";


const CarPage = () => {
    const [carsList, setCarsList] = useState([]);
    const [carRemoved,setCarRemoved] = useState(false)


    useEffect(() => {
        const getCars = async () => {
            const data = await fetch('http://localhost:3030/cars/all');
            const json = await data.json()
            setCarsList(json.message)
        }
        getCars()
    }, [carRemoved])

     const  removeCarHandler=async(id)=>{
        await fetch(`http://localhost:3030/cars/delete/${id}`,{
            method:"DELETE"
        })
        .then(data=>data.json())
        .then(json=>{
            Swal.fire({
                title: 'Delete Car From Catalog',
                text: 'Car Deleted Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              });
              setCarRemoved(prev=>!prev)
           
        })
        .catch(error=>{
            Swal.fire({
                title: 'Error',
                text: 'Something happen Wrong!!!',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        })

     }

    return (
        <div className="flex flex-col p-3 m-2">
            <h1 className="text-blue-600 text-center">Our Car Catalog</h1>
          
            <Link to="/addCar" className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded">Add New Car</Link>
           
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-white border-b">
                                    <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Brand
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Label
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Price
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                   
                                     {!carsList ?
                                        (<h1 className="">No Cars Found</h1>)
                                        : (carsList.map(car => (
                                            <tr key={car._id} className="bg-gray-100 border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {car._id}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {car.brand}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {car.label}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {car.price.toFixed(3)}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <button className="bg-red-500 px-2 m-1"
                                                    onClick={(e)=>{
                                                       removeCarHandler(car._id)
                                                    }
                                                    }
                                                    >X</button>
                                                     <button className="bg-green-500 px-2 m-1"
                                                    onClick={(e)=>{console.log("edit clicked",car)}}
                                                    >Edit</button>
                                                    
                                                </td>
                                            </tr>
                                        )))} 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarPage;