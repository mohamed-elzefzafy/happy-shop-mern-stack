import { Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import UseAddSubcategoryHook from "../../customHooks/subcategory/UseAddSubcategoryHook";



const AdminAddSubcategory = () => {

  const [name ,  id , category  , onChangeName , handleChange  , handleSubmit] = UseAddSubcategoryHook();

  return (
    <div>
    <Row className="justify-content-start ">
    <ToastContainer/>
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
            <input
                 onChange={onChangeName}
                 value={name}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="اسم التصنيف الفرعي"
            />
            <select name="category" id="cat" className="select mt-3 px-2 " value={id} onChange={handleChange}>
            <option value="0">إختر تصنيف رئيسى </option>
            {
          category.data ? (    category.data.map((category , index) =>
              <option value={category._id} key={index}> {category.name}</option>
              )) : null
            }
            </select>
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

export default AdminAddSubcategory;