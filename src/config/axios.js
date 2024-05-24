import axios from 'axios'
const {VITE_BASE_API_URL} = import.meta.env
import { store } from '@/redux/store'
axios.defaults.baseURL = VITE_BASE_API_URL + '/api'
axios.defaults.headers['Content-Type'] = 'application/json'


axios.interceptors.request.use(function (config) {
    const token = store.getState().auth.token
    config.headers['Authorization'] = `Bearer ${token}`
    return config;
  }, function (error) {
    return Promise.reject(error);
  });