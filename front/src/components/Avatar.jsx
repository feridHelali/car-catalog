const Avatar = ({...props}) => {
    const avatarUrl = 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png'
    return (
      <h1>
        Name: <span>{props.name}</span>
        <img src={avatarUrl} alt="avatar" />
      </h1>
    )
  }
  
  export default Avatar;