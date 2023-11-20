import { useParams } from "react-router-dom";
import UseProductDetailHook from "../../customHooks/product/UseProductDetailHook";
import { useState } from "react";
import {FaChevronRight} from "react-icons/fa";
import {FaChevronLeft} from "react-icons/fa";
import { Image } from "react-bootstrap";

const ProductGallery = () => {
const {id} = useParams();
const  [item , Images , brand] = UseProductDetailHook(id);


const [currentImageIndex, setCurrentImageIndex] = useState(0);

const goToPreviousImage = () => {
  setCurrentImageIndex((prevIndex) => prevIndex === 0 ? Images.length - 1 : prevIndex - 1);
};

const goToNextImage = () => {
  setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
};
  return (
<div className="image-carousel ">
{Images?.length < 2 ? (null) : (<button className="border-0 bg-transparent text-secondary fw-bold " onClick={goToPreviousImage}><FaChevronRight/></button>)}
<img className="w-75 h-75 object-fit-cover img-fluid" src={Images[currentImageIndex].original} alt={` ${currentImageIndex + 1}`}/>
{Images?.length < 2 ? (null) : (<button className="border-0 bg-transparent text-secondary fw-bold" onClick={goToNextImage}><FaChevronLeft/></button>)}

</div>
)
}

export default ProductGallery;