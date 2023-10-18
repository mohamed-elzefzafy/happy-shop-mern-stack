import baseUrl from "../Api/baseUrl"


const useUpdateDataWithImage = async(url , params) => {

  const config = {
    headers: { "Content-Type": "multipart/form-data" }
}
const res = await baseUrl.put(url , params , config);

return res;
}


const useUpdateData = async(url , params) => {
  const res = await baseUrl.put(url , params);
  
  return res;
  }
  
export { useUpdateDataWithImage , useUpdateData}