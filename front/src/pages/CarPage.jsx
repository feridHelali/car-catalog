import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CarPage = () => {
    const [carsList, setCarsList] = useState([]);
    const [carRemoved, setCarRemoved] = useState(false)


    useEffect(() => {
        const getCars = async () => {
            const data = await fetch('http://localhost:3030/cars/all');
            const json = await data.json()
            setCarsList(json.message)
        }
        getCars()
    }, [carRemoved])

    const removeCarHandler = async (id) => {
        await fetch(`http://localhost:3030/cars/delete/${id}`, {
            method: "DELETE"
        })
            .then(data => data.json())
            .then(json => {
                Swal.fire({
                    title: 'Delete Car From Catalog',
                    text: 'Car Deleted Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                setCarRemoved(prev => !prev)

            })
            .catch(error => {
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
            <h1 className="text-center text-blue-600">Our Car Catalog</h1>

            <Link to="/addCar" className="px-4 py-2 font-bold text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-700">Add New Car</Link>

            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-white border-b">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                                            #
                                        </th>
                                        <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                                            Brand
                                        </th>
                                        <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                                            Label
                                        </th>
                                        <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {carsList?.length === 0 ?
                                        (<tr><td><span className="font-mono text-center">No Cars Found</span></td></tr>)
                                        : (carsList.map(car => (
                                            <tr key={car._id} className="bg-gray-100 border-b">
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                    {car._id}
                                                </td>
                                                <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                                    {car.brand}
                                                </td>
                                                <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                                    {car.label}
                                                </td>
                                                <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                                    {car.price.toFixed(3)}
                                                </td>
                                                <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                                                    <button className="w-16 h-8 px-2 m-1 text-white bg-red-500 rounded-md shadow-md"
                                                        onClick={(e) => {
                                                            removeCarHandler(car._id)
                                                        }
                                                        }
                                                    >X</button>
                                                    <Link to={`/update-car/${car._id}`} className="w-16 h-16 px-2 m-1 text-white bg-green-500 rounded-md shadow-md">
                                                        <span className="w-16 h-16 px-2 m-1 text-white bg-green-500 rounded-md shadow-md">
                                                            Edit
                                                        </span>
                                                    </Link>

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