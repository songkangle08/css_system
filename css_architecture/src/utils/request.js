import axios from 'axios';


const service = axios.create({});

service.interceptors.requrst.use(config=>{
  return config
})

service.interceptors.response.use(response=>{
  return config
})
