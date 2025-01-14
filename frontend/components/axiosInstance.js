import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://10.32.1.107:4000'
})

export const BASE_URL = 'http://10.32.1.107:4000';

export default axiosInstance;