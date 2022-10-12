import { fetchUsers } from "./Action"

export const MapDispatchToProps=(dispatch)=>{
    return {
     fetch1:()=>dispatch(fetchUsers())
   }
   }
   
   export const MapStateToProps=(state)=>{
     return {
        state
     } 
   }