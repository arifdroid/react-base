let inMemoryToken : any = null;

export class Authtoken {

    static get(){
        return (
            inMemoryToken || localStorage.getItem('jwt') || null
        )
    }

    static set(token : string, rememberMe :any){

        if(rememberMe){
            localStorage.setItem("jwt",token || '')
        }else{

            console.log('why this')
            inMemoryToken = token;
            localStorage.setItem("jwt", '')
        }


    }
}