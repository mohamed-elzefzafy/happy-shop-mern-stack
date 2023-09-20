import baseUrl from "../Api/baseUrl";

const useCreateDataWithImage = async (url , params) => {
  const config = {
    headers : {"Content-Type" : "multipart/form-data"}
  }
  const res = await baseUrl.post(url , params , config);
  return res.data;
}



const useCreateData = async (url , params) => {
  const res = await baseUrl.post(url , params);
  return res.data;
}


export  {useCreateData ,  useCreateDataWithImage};

