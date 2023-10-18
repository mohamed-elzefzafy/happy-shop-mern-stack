
import CardProductContainer from '../../components/products/CardProductContainer'
import HomeCategory from '../../components/home/HomeCategory'
import DiscountSection from '../../components/home/DiscountSection'
import BrandFeatures from '../../components/brand/BrandFeatures'
import Slider from './../../components/home/Slider';
import UseHomeProduct from '../../customHooks/product/UseHomeProduct';


const HomeIndex = () => {
const [items] = UseHomeProduct();
  return (
    <>
        <Slider/>
        <HomeCategory/>
        <CardProductContainer products={items} title="الأكثر مبيعا" btntitle="المزيد" pathText="/products"/>
        <DiscountSection/>
        <CardProductContainer products={items} title="أحدث الأزياء" btntitle="المزيد" pathText="/products"/>
      <BrandFeatures title="أحدث الماركات" btntitle="المزيد"/>
    </>
  )
}

export default HomeIndex;