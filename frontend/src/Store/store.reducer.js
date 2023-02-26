import { AllDataFetch, DeleteLoading, DeleteUsers, Errorhandle, Loading, PostUsers } from "./store.type"


const initalState={
    loading:false,
    errorhandle:false,
    UserData:[],
    totalPage:0,
    deletedAll:false
}



export const Reducer=(state=initalState,{type,payload})=>{

 switch (type){
    
    case Loading :{
        return{
            ...state,
            loading:true,
            errorhandle:false,
        }
    }
    case Errorhandle:{
        return{
            ...state,
            errorhandle:true,
            loading:false,
        }
    }
    case AllDataFetch:{
        return{
            ...state,
            errorhandle:false,
            loading:false,
            UserData:payload.data,
            totalPage:payload.totalPages,
        }
    }
 

     case DeleteLoading:{
        return{
            ...state,
            deletedAll:true,
        }
     }

    case DeleteUsers :{
        return{
            ...state,
            UserData:[],
            totalPage:0,
            deletedAll:false,
           
        }
    }
    case PostUsers :{
        return{
            ...state,
            loading:false,
            errorhandle:false
        }
    }
   
   
     default :{
        return state
     }
 }




}