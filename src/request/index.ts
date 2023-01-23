import axios, { AxiosInstance, Method } from "axios";

console.log(process.env)
//create axios instance
const baseURL = process.env.VUE_APP_BASE_ADDR

export const url = {
    one: "/one",
    register: "/register"
}

// export link service
export const link = (url: string, method: Method, data?:any, params?:any) => {
    return new Promise((resolve, reject) => {
        service.request({
            url,
            method,
            data,
            params
        }).then(resp => {
            console.log(resp)
            resolve(resp)
        }).catch(err => {
            reject(err)
        })
    })
}

// define axiso instace
const service: AxiosInstance = axios.create(
    {
        baseURL,
        timeout: 5000,
        headers: {
            "Content-type" : "application/json;charset=utf-8"
        }
    }
)

//request interceptors
service.interceptors.request.use((config) => {
    if(localStorage.getItem("token")){
        config.headers = config.headers || {}
        const header: any = config.headers
        header.token = localStorage.getItem("token") || ""
    }
    return config
})

//response interceptors
service.interceptors.response.use(({ data }) => {
    // const code : number = data.data.code
    // if(code != 200){
    //     return Promise.reject(data)
    // }
    return data
},(err) => {
    console.log(err)
})

export default service