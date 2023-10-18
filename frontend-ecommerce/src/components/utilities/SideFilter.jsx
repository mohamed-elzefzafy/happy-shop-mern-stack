import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from '../../redux/actions/brandAction';
import { useState } from 'react';
import UseSearchProduct from '../../customHooks/product/UseSearchProduct';
import UseSideBarSearchHook from '../../customHooks/category/UseSideBarSearchHook';

const SideFilter = () => {
const [clickCategory , clickBrand , priceFrom , priceTo, category , brand , queryCategory] = UseSideBarSearchHook();
  return (
    <div className="mt-3">
    <Row>
      <div className="d-flex flex-column mt-2">
        <div className="filter-title">الفئة</div>
        <div className="d-flex mt-3">
          <input onChange={clickCategory} type="checkbox" value="0" />
          <div className="filter-sub me-2 ">الكل</div>
        </div>
    
    {category ? (
      category.map((category , index) => 
      <div className="d-flex mt-2" key={index}>
          <input onChange={clickCategory} type="checkbox" value={category._id} />
          <div className="filter-sub me-2 ">{category.name}</div>
        </div>)
    ) : null}

      </div>

      <div className="d-flex flex-column mt-2">
        <div className="filter-title mt-3">الماركة</div>
        <div className="d-flex mt-3">
          <input onChange={clickBrand} type="checkbox" value="0" />
          <div className="filter-sub me-2 ">الكل</div>
        </div>
  
  {brand ? (
    brand.map((brand , index) => 
    <div className="d-flex mt-2" key={index}>
          <input onChange={clickBrand} type="checkbox" value={brand._id} />
          <div className="filter-sub me-2 ">{brand.name}</div>
        </div>)
  ) : null}

      </div>

      <div className="filter-title my-3">السعر</div>
      <div className="d-flex">
        <p className="filter-sub my-2">من:</p>
        <input
        onChange={priceFrom}
          className="m-2 text-center"
          type="number"
          style={{ width: "50px", height: "25px" }}
        />
      </div>
      <div className="d-flex">
        <p className="filter-sub my-2">الي:</p>
        <input
        onChange={priceTo}
          className="m-2 text-center"
          type="number"
          style={{ width: "50px", height: "25px" }}
        />
      </div>
    </Row>
  </div>
  )
}

export default SideFilter