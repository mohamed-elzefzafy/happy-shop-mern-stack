
import CardProductContainer from '../../components/products/CardProductContainer'
import HomeCategory from '../../components/home/HomeCategory'
import DiscountSection from '../../components/home/DiscountSection'
import BrandFeatures from '../../components/brand/BrandFeatures'
import Slider from './../../components/home/Slider';

const HomeIndex = () => {
  return (
    <>
        <Slider/>
        <HomeCategory/>
        <CardProductContainer title="الأكثر مبيعا" btntitle="المزيد" pathText="/products"/>
        <DiscountSection/>
        <CardProductContainer title="أحدث الأزياء" btntitle="المزيد"/>
      <BrandFeatures title="أحدث الماركات" btntitle="المزيد"/>
    </>
  )
}

export default HomeIndex;