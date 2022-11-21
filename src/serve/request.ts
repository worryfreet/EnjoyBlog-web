import axios from 'axios'


let baseURL = ""
const service = axios.create({
    baseURL,
    timeout:5000
})

// 发送请求之前的拦截器
service.interceptors.request.use(
  config=>{
    config.headers = config.headers || {}
    if(localStorage.getItem('token')){
        config.headers.token = localStorage.getItem('token') || ''
    }
    return config
  }
)

// 响应拦截器
service.interceptors.response.use(
    response =>  {
        const res = response.data
        if (response.status !== 200) {
            return Promise.reject(new Error(res.message || "Error"));
          } else {
            return res;
          }
    },
    error => {
        return Promise.reject(error);
      }
)

export default service