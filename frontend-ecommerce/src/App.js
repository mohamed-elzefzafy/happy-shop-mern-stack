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
import AdminAllUsersPage from './pages/admin/AdminAllUsersPage';
import AdminAddCouponPage from './pages/admin/AdminAddCouponPage';
import AdminEditCouponPage from './components/admin/AdminEditCouponPage';
import UseProtectedRoute from './customHooks/UseProtectedRoute';
import ProtectedRoute from './components/utilities/ProtectedRoute';
import ProductByCategoryPage from './pages/product/ProductByCategoryPage';
import ProductByBrandPage from './pages/product/ProductByBrandPage';
import AdminSpecificOrder from './components/admin/AdminSpecificOrder';






function App() {
const [isUser , isAdmin , userData] = UseProtectedRoute();

  const router = createBrowserRouter([{
      path :"/" ,
      element : <HomePage/>,
      children : [
        //general routes
       {index : true ,  element :<HomeIndex/>} ,
       {path : "/login" , element : <LoginPage/>},
       {path : "/register" , element : <RegisterPage/>},
       {path : "/allcategory" , element : <AllCategoryPage/>},
       {path : "/allbrand" , element : <AllBrandsPage/>},
       {path : "/products" , element : <ShopProductPage/>},
       {path : "/products/:id" , element : <ProductDetailsPage/>},
       {path : "/forgetpassword" , element : <ForgetPasswordPage/>},
       {path : "/verifycode" , element :<VerifyPasswordPage/> },
       {path : "/resetpassword" , element :<ResetPassword/> },
       {path : "/product/category/:id" , element :<ProductByCategoryPage/> },
       {path : "/product/brand/:id" , element : <ProductByBrandPage/> },
    
      //admin routes
       {path : "/admin/allproducts" , element : <ProtectedRoute auth={isAdmin}><AdminAllProductsPage/></ProtectedRoute> },
       {path : "/admin/editproduct/:id" , element : <ProtectedRoute auth={isAdmin}><AdminEditProductPage/> </ProtectedRoute>},
       {path : "/admin/allorders" , element : <ProtectedRoute auth={isAdmin}> <AdminAllOrdersPage/> </ProtectedRoute>},
       {path : "/admin/orders/:id" , element : <ProtectedRoute auth={isAdmin}><AdminSpecificOrder/></ProtectedRoute>},
       {path : "/admin/addbrand" , element :<ProtectedRoute auth={isAdmin}><AdminAddBrandPage/></ProtectedRoute> },
       {path : "/admin/addcategory" , element : <ProtectedRoute auth={isAdmin}><AdminAddCategoryPage/></ProtectedRoute>},
       {path : "/admin/addsubcategory" , element :<ProtectedRoute auth={isAdmin}><AdminAddSubcategoryPage/></ProtectedRoute> },
       {path : "/admin/addproduct" , element :<ProtectedRoute auth={isAdmin}><AdminAddProductPage/></ProtectedRoute> },
       {path : "/admin/allusers" , element :<ProtectedRoute auth={isAdmin}><AdminAllUsersPage/></ProtectedRoute>},
       {path : "/admin/addcoupon" , element : <ProtectedRoute auth={isAdmin}><AdminAddCouponPage/></ProtectedRoute>},
       {path : "/admin/editcoupon/:id" , element :<ProtectedRoute auth={isAdmin}><AdminEditCouponPage/></ProtectedRoute> },

        //user routes
       {path : "/order/paymentmethod" ,  element :<ProtectedRoute auth={isUser}><ChoosePayMethoudPage/></ProtectedRoute> },
       {path : "/cart" , element :<ProtectedRoute auth={isUser}><CartPage/></ProtectedRoute> },
       {path : "/user/allorders" , element :<ProtectedRoute auth={isUser}><UserAllOrdersPage/></ProtectedRoute> },
       {path : "/user/favoriteproducts" , element :<ProtectedRoute auth={isUser}><UserFavoriteProductsPage/></ProtectedRoute> },
       {path : "/user/addresses" , element :<ProtectedRoute auth={isUser}><UserAllAdressesPage/></ProtectedRoute> },
       {path : "/user/add-address" , element :<ProtectedRoute auth={isUser}><UserAddAdressPage/></ProtectedRoute> },
       {path : "/user/edit-address/:id" , element : <ProtectedRoute auth={isUser}><UserEditAdressPage/></ProtectedRoute>},
       {path : "/user/profile" , element : <ProtectedRoute auth={isUser}><UserProfilePage/></ProtectedRoute>},

    
      ] 
    }])
    
  return (
    <div className="font">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
