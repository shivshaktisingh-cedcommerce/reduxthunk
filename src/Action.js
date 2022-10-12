



const fetchUsersRequest=()=>{
    return {
        type: 'FETCH_USERS_REQUEST'
    }
}

const fetchUsersSuccess=users=>{
    return {
        type:'FETCH_USERS_SUCCESS' ,
        payload:users
    }
}


const fetchUsersFailure=error=>{
    return {
        type: 'FETCH_USERS_FAILURE' ,
        payload:error
    }
}



export const fetchUsers=()=>{
    var options1={
        method:"GET" ,
        headers:{Authorization:`Bearer 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`}
    
      }
    return  function (dispatch){
        dispatch(fetchUsersRequest())
        fetch('https://api.github.com/users' ,{options1})
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            dispatch(fetchUsersSuccess(res))  
        })
        .catch(error=>{
            dispatch(fetchUsersFailure(error.message))
        })
        
     
    }
}

