import Avatar from "./Avatar";

const Person = ({...props}) => {
    return (
      <>
        <h1 className="header">{props.name}</h1>
        <Avatar name={props.name}/>
        <p>{props.gender}</p>
      </>
  
    )
  }

  export default Person;