import Multiselect from "multiselect-react-dropdown";
import { Col, Row } from "react-bootstrap";
import add from "../../images/add.png";
import MultiImageInput from "react-multiple-image-input";
import { ToastContainer } from "react-toastify";
import { CompactPicker } from "react-color";
import UseAddProductHook from "../../customHooks/product/UseAddProductHook";




const AdminAddProduct = () => {

  const  [images ,prodName ,CatID , prodDescription,priceBefore , priceAftr,qty ,category,options , BrandID ,brand,colors,showColor,
    colorBoxShow,onSelect , onRemove, onSelectBrand, removeColor,handleChangeComplete,handleSubmit,
   setImages , setProdName , setProdDescription , onChangePriceBefore , onChangePriceAfter , setQty , onSelectCategory]
    = UseAddProductHook();

  return (
    <div>
  
    <Row className="justify-content-start ">
    <ToastContainer/>
        <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
        <Col sm="8">
            <div className="text-form pb-2"> صور للمنتج</div>

<MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme={"light"}
                        allowCrop={false}
                        max={4}
                    />


            <input
              value={prodName}
              onChange={(e)=> setProdName(e.target.value)}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="اسم المنتج"
            />
            <textarea
              value={prodDescription}
              onChange={(e)=> setProdDescription(e.target.value)}
                className="input-form-area p-2 mt-3"
                rows="4"
                cols="50"
                placeholder="وصف المنتج"
            />
            <input
            value={priceBefore}
              onChange={onChangePriceBefore}
                type="number"
                className="input-form d-block mt-3 px-3"
                placeholder="السعر قبل الخصم"
            />
            <input
            value={priceAftr}
              onChange={onChangePriceAfter}
                type="number"
                className="input-form d-block mt-3 px-3"
                placeholder='السعر بعد الخصم'
            />
      <input
      value={qty}
              onChange={(e)=> setQty(e.target.value)}
                type="number"
                className="input-form d-block mt-3 px-3"
                placeholder="الكميه المتاحه"
            />

<select name="category" id="cat" className="select input-form-area mt-3 px-2" value={CatID?._id} onChange={onSelectCategory}>
            <option value="0">إختر تصنيف رئيسى </option>
            {
          category.data ? (    category.data.map((category , index) =>
              <option value={category._id} key={index}> {category.name}</option>
              )) : null
            }
            </select>

            <Multiselect
                className="mt-2 text-end"
                placeholder="التصنيف الفرعي"
                options={options}
                onSelect={onSelect}
                onRemove={onRemove}
                displayValue="name"
                style={{ color: "red" }}
            />




<select name="category" id="cat" className="select input-form-area mt-3 px-2 " value={BrandID} onChange={onSelectBrand}>
<option value="0">إختر ماركه </option>
            {
          brand?.data ? (    brand?.data.map((brand , index) =>
              <option value={brand?._id} key={index}> {brand?.name}</option>
              )) : null
            }
            </select>
            <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
            <div className="mt-1 d-flex">
              {
                colors.length > 0 ? (
                  colors.map((color, index) => <div
                    className="color ms-2 border  mt-1"
                    key={index}
                    onClick={()=> removeColor(color)}
                    style={{ backgroundColor: color }}></div>
                   )) : null}
                <img onClick={colorBoxShow} src={add} alt="" width="30px" height="35px" className="" style={{cursor : "pointer"}}/>
              <div style={{opacity : showColor ? "1" : "0"}}>
                  <CompactPicker onChangeComplete={handleChangeComplete}/>
              </div>
            </div>
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={handleSubmit} className="btn-save d-inline mt-2 mastercolor">حفظ التعديلات</button>
        </Col>
    </Row>
</div>
  )
}

export default AdminAddProduct;