import AuthService from "./authService";
import { Authtoken } from "./authToken";


const prefix = 'AUTH';

const authActions ={
    
    AUTH_INIT_SUCCESS : `${prefix}_INIT_SUCCESS`,
    AUTH_INIT_FAILED : `${prefix}_INIT_FAILED`,

    AUTH_START : `${prefix}_START`,
    AUTH_SUCCESS : `${prefix}_SUCCESS`,
    AUTH_ERROR : `${prefix}_ERROR`,


    doSigninWithEmailAndPassword :(
        email : string,
        password :string,
        rememberMe: any

    )=>async(dispatch : any)=>{

        try {

            dispatch({type: authActions.AUTH_START});

            let currentUser = null;

            const token = await AuthService.signInWithEmailAndPassword(email, password);

            Authtoken.set(token, rememberMe);
            
            currentUser = await AuthService.fetchMe();

            dispatch({
                type: authActions.AUTH_SUCCESS,
                payload: currentUser
            })
            
        } catch (error) {
            
            dispatch({
                type: authActions.AUTH_ERROR,
                payload:'error'
            })
        }
    }

}






export default authActions;