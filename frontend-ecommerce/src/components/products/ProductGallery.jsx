import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useParams } from "react-router-dom";
import UseProductDetailHook from "../../customHooks/product/UseProductDetailHook";


const ProductGallery = () => {
const {id} = useParams();
const  [item , images , brand] = UseProductDetailHook(id);



  return (
    <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-2 ml-5">
  <ImageGallery
   items={images}  
  showFullscreenButton={false} isRTL={true} showPlayButton={false}
    showThumbnails={false}
    renderLeftNav={LeftButton}
    renderRightNav={RightButton}
  />
    </div>
  )
}

export default ProductGallery;