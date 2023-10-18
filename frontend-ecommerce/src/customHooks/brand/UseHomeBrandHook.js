import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../redux/actions/brandAction";


const UseHomeBrandHook = () => {
  const dispatch = useDispatch();


  useEffect(()=> {
    dispatch(getAllBrand());
  },[])
  
  const brand = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);


  return [loading , brand ];

}

export default UseHomeBrandHook;