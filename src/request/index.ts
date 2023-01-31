import axios, { AxiosInstance, Method } from "axios";
import { ElMessage } from "element-plus";

console.log(process.env)
//create axios instance
const baseURL = process.env.VUE_APP_BASE_ADDR

export const url = {
    one: "/one",
    register: "/register",
    userlist: "/userlist",
    chartone: "/chartone"
}

// export link service
export const link = (url: string, method: Method, data?:unknown, params?:unknown) => {
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
service.interceptors.request.use(
    (config) => {
    if(localStorage.getItem("token")){
        config.headers = config.headers || {}
        const header: any = config.headers
        header.token = localStorage.getItem("token") || ""
    }
    return config
}, (err) => {
    console.log("err", err)
    return Promise.reject(err)
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
    switch (err.response.status) {
        case 404:
            ElMessage.error("404 err")
            break;
        case 500:
            ElMessage.error("500 err")
            break;
        default:
            ElMessage.error("unknown err")
            break;
    }
    return Promise.reject(err)
})

export default service