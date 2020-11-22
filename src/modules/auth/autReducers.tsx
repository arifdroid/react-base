import actions from "./authActions";


//first setup initial state
const initialData = {

    currentUser :null,
    currentTenant:null,
    loadingInit:true,
    loadingVerifyEmail:false,
    loading:false,
    errorMessage:null,

}

export default (state= initialData,{type,payload}:{type:string, payload: any})=>{
    
    if(type === actions.AUTH_START){
        return{
            ...state,
            loading:true,
            errorMessage:null
        }
    }

    if(type = actions.AUTH_SUCCESS){
        return{
            ...state,
            currentUser:payload.currentUser || null,
            loading:false
        }
    }

    if (type === actions.AUTH_ERROR) {
        return {
          ...state,
          currentUser: null,
          currentTenant: null,
          errorMessage: payload || null,
          loading: false,
        };
      }
}