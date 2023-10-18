import React from 'react'
import BrandContainer from '../../components/brand/BrandContainer'
import Pagination from '../../components/utilities/Pagination'
import UseAllBrandPageHook from '../../customHooks/brand/UseAllBrandPageHook';


const AllBrandsPage = () => {
  const [brand , loading , pageCount , getPage] = UseAllBrandPageHook();
  return (
    <div style={{ minHeight: "680px" }}>
<BrandContainer data={brand.data}  loading={loading}/>
{pageCount > 1 && <Pagination pageCount={pageCount} onPress={getPage}/> }
    </div>
  )
}

export default AllBrandsPage