import Axios from '../lib/Axios'

export async function checkAuth(setAuth){
    try{
        let res = await Axios.get('/accounts/test_login/')
        if (res.status === 200 || res.status === 201){

            return true
        }
    }catch(e){
        console.log("setAuth to false")
        return false
    }
}
