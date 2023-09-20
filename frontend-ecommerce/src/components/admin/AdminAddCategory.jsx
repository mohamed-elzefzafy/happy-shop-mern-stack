import { Col, Row } from "react-bootstrap"
import avatar from "../../images/avatar.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategory } from "../../redux/actions/categoryAction";


const AdminAddCategory = () => {
const dispatch = useDispatch();
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);


  const onImageChange = (event) =>{
    if(event.target.files && event.target.files[0] )
    {
      setImg(URL.createObjectURL(event.target.files[0]))
      setSelectedFile(event.target.files[0]);
    }
    
    
    
    }


  // const  onChangeName = (event) => {
    
  //   }


    const handleSubmit = (event) =>{
      event.preventDefault();
      const formData = new FormData();
      formData.append("name" , name);
      formData.append("image" , selectedFile);
    
    dispatch(createCategory( formData))
    
      }
    


  return (
    <div>
    <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
            <div className="text-form pb-2">صوره التصنيف</div>
          
            <label for="upload-photo">
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

<input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف"
                    />
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
    </Row>
</div>
  )
}

export default AdminAddCategory