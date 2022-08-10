import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 5000
    })
    // 一、请求拦截器
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log("未连接到接口");
    })

    // 二、响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log("未连接到接口");
    })

    return instance(config)
}
