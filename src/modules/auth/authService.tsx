import authAxios from "../shared/axios/authAxios";

export default class AuthService{

    static async signInWithEmailAndPassword( email :string, password : string ){
        const response = await authAxios.post(`/auth/sign-in`,{
            email, password
        }) 

        return response.data;
    }

    static async fetchMe() {
        const response = await authAxios.get('/auth/me');
        return response.data;
      }


}