import axios from "axios";


const baseUrl = axios.create({
  baseURL : "https://happy-shop.onrender.com"
})

export default baseUrl;