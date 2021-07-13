import axios from '../lib/Axios'

export async function checkAuth(setAuth){
    try{
        let res = await axios.get('/accounts/test_login/')
        if (res.status === 200){
            return true
        }
    }catch(e){
        return false
    }
}