const Car =({id,label,photoUrl,price})=>{
    return(
        <div className="card" style={{width:'400px'}}>
          <h4 className="card-title">{label}</h4>
        <img className="card-img-top" src={photoUrl} alt="Card" style={{width:"100%"}} />
        <div className="card-body">
          <p className="card-text">{price.toFixed(3)}</p>
          <button className="btn btn-primary" 
          data-id={id}
          onClick={(event)=>{
            console.log(event.target.dataset.id)
            console.log("Car Clicked");
          }}
          >Add To Cart
          </button>
        </div>
      </div>
    )

}

export default Car;