
import { Row } from 'react-bootstrap'
import ProductCard from '../products/ProductCard'
import Pagination from '../utilities/Pagination'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProductWishList } from '../../redux/actions/wishListAction';
import CardProductContainer from '../products/CardProductContainer';

const UserFavoriteProduct = () => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [favProduct, setFavProduct] = useState([]);





  const res = useSelector(state => state.wishList.allUserWishList);
  useEffect(() => {
  const getData = async () => {
    setLoading(true);
    await dispatch(getProductWishList());
    setLoading(false);
  } 
  getData();
  },[])


  useEffect(() => {
try {
  if (loading === false) 
  {
    if (res?.data)
    {
      setFavProduct(res?.data);
      console.log(favProduct);
    }
  }
} catch (error) {
  console.log(error);
}
  },[loading])

  return (
    <div>
          <div className="admin-content-text pb-4"> قائمة المفضله </div>
          <Row className='justify-content-start'>
        
        {
          favProduct?.length  > 0 ? (
            <CardProductContainer products={favProduct} title="" btntitle="" pathText=""/>
          ) : <h4 className='text-center mt-5 admin-content-text fs-3 fs-md-1'>  لا يوجد منتجات مفضله </h4>
        }
          
    
          </Row>
          {/* <Pagination/> */}
    </div>
  )
}

export default UserFavoriteProduct;