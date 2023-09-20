import axios from "axios";


const baseUrl = axios.create({
  // baseURL : "https://happy-shop.onrender.com"
 baseURL : "http://localhost:8000"
})

export default baseUrl;



