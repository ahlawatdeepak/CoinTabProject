import { AllDataFetch, DeleteLoading, DeleteUsers, Errorhandle, Loading, PostUsers } from "./store.type"
import axios from "axios"




export const PostAllUsers=()=>async(dispatch)=>{
    dispatch({
        type:Loading
     })
 try {
    let res=await axios.post(`https://sore-tan-jay-robe.cyclic.app/user`)
    
    dispatch({
        type:PostUsers,
    })
    
 } catch (error) {
    dispatch({
        type:Errorhandle
    })
 }
}

export const FetchUsers=(creds)=>async(dispatch)=>{
    console.log(creds)
         dispatch({
            type:Loading
         })
    try {
        let data=await axios.get(`https://sore-tan-jay-robe.cyclic.app/user?firstname=${creds ? creds.firstname : ""}&country=${ creds ? creds.country : ""}&gender=${creds ? creds.gender: ""}&sort=${creds ? creds.sort: ""}&page=${creds ? creds.page : 1}`)
        console.log(data.data)
        dispatch({
            type:AllDataFetch,
            payload:data.data
        })
        
    } catch (error) {
        dispatch({
            type:Errorhandle
        })
    }


}








export const DeleteFetchUsers=()=>async(dispatch)=>{
    dispatch({
        type:DeleteLoading
     })

try {
   let res=await axios.delete(`https://sore-tan-jay-robe.cyclic.app/user`)
   
    console.log(res)
   if(res){
    dispatch({
        type:DeleteUsers,
    })
   }
   
   
} catch (error) {
   dispatch({
       type:Errorhandle
   })
}


}