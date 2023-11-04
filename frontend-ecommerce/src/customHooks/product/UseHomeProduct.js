import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions/productAction';
import { useEffect } from 'react';

const UseHomeProductHome = () => {

  const dispatch = useDispatch();

  const getProducts =async () => {

      await dispatch(getAllProducts())
  }
  useEffect(() => {
    getProducts()
  }

,[])

  const allProducts = useSelector((state) => state.allProduct.allProducts)

  let items =[];
  if(allProducts?.data)
  {
    items = allProducts?.data?.slice(0 , 4);
  } else {
    items = [];
  }

  return [items]
}

export default UseHomeProductHome