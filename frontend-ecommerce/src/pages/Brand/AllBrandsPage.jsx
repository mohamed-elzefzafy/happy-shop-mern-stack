import React from 'react'
import BrandContainer from '../../components/brand/BrandContainer'
import Pagination from '../../components/utilities/Pagination'

const AllBrandsPage = () => {
  return (
    <div style={{ minHeight: "680px" }}>
<BrandContainer/>
<Pagination/>
    </div>
  )
}

export default AllBrandsPage