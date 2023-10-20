import { Col, Row, Spinner } from "react-bootstrap";
import UseAddBrandHook from "../../customHooks/brand/UseAddBrandHook";
import { ToastContainer } from "react-toastify";

const AdminAddBrand = () => {

  const [img ,  name , loading, isPress ,  handleSubmit , onImageChange , onChangeName  ] = UseAddBrandHook();
  return (
    <div>
    <Row className="justify-content-start ">
    <ToastContainer />
        <div className="admin-content-text pb-4">اضف ماركه جديده</div>
        <Col sm="8">
            <div className="text-form pb-2">صوره الماركه</div>
            <div>
              <label htmlFor="upload-photo">
                              <img
                                  src={img}
                                  alt="fzx"
                                  height="100px"
                                  width="120px"
                                  style={{ cursor: "pointer" }}
                              />
                          </label>
                          <input
                            type="file"
                            name="photo"
                            onChange={onImageChange}
                            id="upload-photo"
                        />

          </div>
            <input
            onChange={onChangeName}
            value={name}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="اسم الماركه"
            />
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={handleSubmit} className="btn-save d-inline mt-2 mastercolor">حفظ التعديلات</button>
        </Col>
    </Row>
    {isPress  ? loading ? (<Spinner animation="border" variant="secondary" />) : (

<h4>تم الإنتهاء</h4>

   ) : null}
</div>
  )
}

export default AdminAddBrand;