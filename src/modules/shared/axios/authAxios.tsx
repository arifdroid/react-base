import Axios from 'axios';
import config from '../../../config';
import Qs from 'qs';
import moment from 'moment';
import { Authtoken } from '../../auth/authToken';


const authAxios = Axios.create({
    baseURL:config.backendUrl,
    paramsSerializer: function(params){
        return Qs.stringify(params,{
            arrayFormat:'brackets',
            filter: (prefix, value)=>{
                if(moment.isMoment(value) || value instanceof Date){
                    return value.toISOString();
                }

                return value;
            }
        })
    }
})

authAxios.interceptors.request.use(

    async function (options:any) {

        const token = Authtoken.get();
        if(token){
            options.headers['Authorization'] = `Bearer ${token}`;
        }

        // options.headers['Accept-Language'] = 

        return options;

    },
    function error(error){
        console.log('\n\n=========\n')
        console.log('Request Error')
        console.log('\n=========\n\n')
        return Promise.reject(error);
    } 

)

export default authAxios;