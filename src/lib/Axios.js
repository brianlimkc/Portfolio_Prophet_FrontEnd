import axios from "axios";

let baseUrl = 'http://localhost:8000'

axios.interceptors.request.use(
    config => {
        if(localStorage.access){
            config.headers.Authorization = `Bearer ${localStorage.access}`;
        }else{
            delete config.headers.Authorization
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        const originalRequest = error.config;
        let refreshToken = localStorage.refresh;

        if( refreshToken &&
            error.response.status === 401 &&
            !originalRequest._retry
        ){
            originalRequest._retry = true
            return axios.post(`${baseUrl}/api/token/refresh/`, { refresh : refreshToken})
                .then(res => {
                    if( res.status === 200){
                        console.log(res.data)
                        localStorage.setItem("access", res.data.access)

                        return axios(originalRequest);
                    }
                });


        }
        return Promise.reject(error)
    })

export default axios