import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import HomeIndex from "./pages/home/HomeIndex";
import AllCategoryPage from './pages/category/AllCategoryPage';
import AllBrandsPage from './pages/Brand/AllBrandsPage';
import ShopProductPage from './pages/product/ShopProductPage';
import ProductDetailsPage from './pages/product/ProductDetailsPage';
import CartPage from './pages/cart/CartPage';
import ChoosePayMethoudPage from './pages/checkout/ChoosePayMethoudPage';
import AdminAllProductsPage from './pages/admin/AdminAllProductsPage';
import AdminAllOrdersPage from './pages/admin/AdminAllOrdersPage';
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage';
import AdminAddBrandPage from './pages/admin/AdminAddBrandPage';
import AdminAddCategoryPage from './pages/admin/AdminAddCategoryPage';
import AdminAddSubcategoryPage from './pages/admin/AdminAddSubcategoryPage';
import AdminAddProductPage from './pages/admin/AdminAddProductPage';
import UserAllOrdersPage from './pages/user/UserAllOrdersPage';
import UserFavoriteProductsPage from './pages/user/UserFavoriteProductsPage';
import UserAllAdressesPage from './pages/user/UserAllAdressesPage';
import UserAddAdressPage from './pages/user/UserAddAdressPage';
import UserEditAdressPage from './pages/user/UserEditAdressPage';
import UserProfilePage from './pages/user/UserProfilePage';
import AdminEditProductPage from './pages/admin/AdminEditProductPage';
import ForgetPasswordPage from './pages/auth/ForgetPasswordPage';
import VerifyPasswordPage from './pages/auth/VerifyPasswordPage';
import ResetPassword from './pages/auth/ResetPassword';

function App() {

  const router = createBrowserRouter([{
      path :"/" ,
      element : <HomePage/>,
      children : [
       {index : true ,  element :<HomeIndex/>} ,
       {path : "/login" , element : <LoginPage/>},
       {path : "/register" , element : <RegisterPage/>},
       {path : "/allcategory" , element : <AllCategoryPage/>},
       {path : "/allbrand" , element : <AllBrandsPage/>},
       {path : "/products" , element : <ShopProductPage/>},
       {path : "/products/:id" , element : <ProductDetailsPage/>},
       {path : "/admin/editproduct/:id" , element : <AdminEditProductPage/>},
       {path : "/cart" , element : <CartPage/>},
       {path : "/order/paymentmethod" , element : <ChoosePayMethoudPage/>},
       {path : "/admin/allproducts" , element : <AdminAllProductsPage/>},
       {path : "/admin/allorders" , element : <AdminAllOrdersPage/>},
       {path : "/admin/orders/:id" , element : <AdminOrderDetailsPage/>},
       {path : "/admin/addbrand" , element : <AdminAddBrandPage/>},
       {path : "/admin/addcategory" , element : <AdminAddCategoryPage/>},
       {path : "/admin/addsubcategory" , element : <AdminAddSubcategoryPage/>},
       {path : "/admin/addproduct" , element : <AdminAddProductPage/>},
       {path : "/user/allorders" , element : <UserAllOrdersPage/>},
       {path : "/user/favoriteproducts" , element : <UserFavoriteProductsPage/>},
       {path : "/user/addresses" , element : <UserAllAdressesPage/>},
       {path : "/user/add-address" , element : <UserAddAdressPage/>},
       {path : "/user/edit-address" , element : <UserEditAdressPage/>},
       {path : "/user/profile" , element : <UserProfilePage/>},
       {path : "/forgetpassword" , element : <ForgetPasswordPage/>},
       {path : "/verifycode" , element :<VerifyPasswordPage/> },
       {path : "/resetpassword" , element :<ResetPassword/> },
      ] 
    }])
    
  return (
    <div className="font">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
