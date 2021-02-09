const initialState = {
    login:false
}


const login = (state=initialState,action) => {
    
switch(action.type){
    case 'LOGIN_SUCCESS':{
         return {
             ...state,
             login:true

         }
    }
    case 'LOGIN_FAIL':{
        return {
            ...state,
            login:false
        }
    }
    default: return state
}
}


export default login