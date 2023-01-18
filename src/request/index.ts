import axios, { AxiosInstance } from "axios";

const fastMock = "https://www.fastmock.site/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api"
const mockType = 'cbzMock'  // fastMock
const baseURL = mockType === 'cbzMock' ? 'https://mock.presstime.cn/mock/63569fbbbee0a00099ca48a1/api/vue-ts-mall-demo' : 'https://www.fastmock.site/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api'
//create axios instance
const service: AxiosInstance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        "Content-type" : "application/json;charset=utf-8"
    }
})

//request interceptors
service.interceptors.request.use((config) => {
    config.headers = config.headers || {}
    if(localStorage.getItem("token")){
        const header: any = config.headers
        header.token = localStorage.getItem("token") || ""
    }
    return config
})

//response interceptors
service.interceptors.response.use(({ data }) => {
    const code : number = data.data.code
    if(code != 200){
        return Promise.reject(data)
    }
    return data
},(err) => {
    console.log(err)
})

export default service