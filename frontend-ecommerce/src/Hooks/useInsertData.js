import baseUrl from "../Api/baseUrl";

const useInsertDataWithImage = async (url , params) => {
  const config = {
    headers : {"Content-Type" : "multipart/form-data"}
  }
  const res = await baseUrl.post(url , params , config);
  return res;
}



const useInsertData = async (url , params) => {
  const res = await baseUrl.post(url , params);
  return res;
}


export  {useInsertData ,  useInsertDataWithImage};

