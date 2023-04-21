import axios from 'axios'

const axiosCLient  = axios.create({
    baseURL : `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosCLient.interceptors.request.use((config) => {
    const token = '123'
    config.headers.Authorization = `Bearer ${token}`
})

axiosCLient.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response && error.response.status == 401) {
        router.navigate('/login')
        return error
    }
    throw error
})

export default axiosCLient