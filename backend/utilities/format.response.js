const formatResponse = (status,message,payload="") =>{
    return ({
        status: status,
        message: message,
        payload: payload
    })
}

module.exports=formatResponse;