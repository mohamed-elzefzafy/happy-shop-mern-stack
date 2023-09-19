import NavBarLogin from "../../components/utilities/NavBarLogin";
import Footer from "../../components/utilities/Footer";
import { Outlet } from "react-router-dom";



const HomePage = () => {
  return (
    <div className="font" style={{minHeight : "670px"}}>
    <NavBarLogin/>
    <Outlet/>
    <Footer/>
   </div>
  )
}

export default HomePage;