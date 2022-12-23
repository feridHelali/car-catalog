import Car from "./Car";

const CarCatalog = (props) => {
    return (

        <>
            <h1>Our Car Catalog</h1>
            {props.cars.map(car => (
                <Car
                    key={car.id}
                    id={car.id}
                    label={car.label}
                    photoUrl={car.photoUrl}
                    price={car.price}
                />))}
        </>
    )
}

export default CarCatalog;