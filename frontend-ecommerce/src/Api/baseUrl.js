import axios from "axios";
import { base_url_string } from "./constans";


const baseUrl = axios.create({
 baseURL : base_url_string
})

export default baseUrl;



