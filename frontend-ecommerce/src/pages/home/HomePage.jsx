import NavBarLogin from "../../components/utilities/NavBarLogin";
import Slider from "../../components/home/Slider";
import HomeCategory from "../../components/home/HomeCategory";
import CardProductContainer from "../../components/products/CardProductContainer";
import DiscountSection from "../../components/home/DiscountSection";
import BrandFeatures from "../../components/brand/BrandFeatures";
import Footer from "../../components/utilities/Footer";



const HomePage = () => {
  return (
    <div className="font" style={{minHeight : "670px"}}>
        <NavBarLogin/>
        <Slider/>
        <HomeCategory/>
        <CardProductContainer title="الأكثر مبيعا" btntitle="المزيد"/>
        <DiscountSection/>
        <CardProductContainer title="أحدث الأزياء" btntitle="المزيد"/>
      <BrandFeatures title="أحدث الماركات" btntitle="المزيد"/>
      <Footer/>
    </div>
  )
}

export default HomePage;