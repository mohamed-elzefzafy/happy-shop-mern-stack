import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';

const UseHomeCategoryHook = () => {
  const dispatch = useDispatch();


  useEffect(()=> {
  const getData = async() => {
  await  dispatch(getAllCategory());
  }
  getData();
  },[])
  
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  const colors = ["#FFD3E8" , "#F4DBA5" , "#55CFDF" , "#FF6262" , "#0034FF"];

  return [loading , category ,colors];

}

export default UseHomeCategoryHook;