import axios from "axios";

const http = axios.create({
    baseURL: '/',
    timeout: 60000,
    withCredentials: false,
});

http.interceptors.request.use(async config => {
    return config;
})

http.interceptors.response.use(async response => {
    console.log(`axios success: ${response?.config?.url}`);
    return response;
},
    error => {
        console.log(`axios error: ${error?.config?.url} \n\n`,)
        return Promise.reject(error);
    }
)

export default http;