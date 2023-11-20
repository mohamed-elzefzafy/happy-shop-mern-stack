import { Container, FormControl, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png"
import login from "../../images/login.png"
import cart from "../../images/cart.png";
import { Link, useNavigate } from "react-router-dom";
import UseNavbarSearchHook from "../../customHooks/search/UseNavbarSearchHook";
import UseGetLoggedUserData from "../../customHooks/auth/UseGetLoggedUserData";
import UseLoggedUserCartProducts from "../../customHooks/UseLoggedUserCartProducts";
import { base_url_string } from "../../Api/constans";


const NavBarLogin = () => {
const [searchWord , onChangeSearch ] = UseNavbarSearchHook();
const navigate = useNavigate();
const [ allCartProducts , cartLength] = UseLoggedUserCartProducts();

const [userData] = UseGetLoggedUserData();

let word = "";
if (searchWord != null)
word = searchWord
else
word = ""


const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userRole");
}



  return (
    <Navbar className="sticky-top mastercolor nav-property" /* bg="dark" */ variant="dark"  expand="sm">
    <Container>
        <Navbar.Brand>
          <Link to="/">
          <img src={logo} className='logo rounded-circle' alt="Logo"/>
          </Link>
              
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <FormControl
              value={word}
              onChange={(e) => onChangeSearch(e)}
                type="search"
                placeholder="ابحث..."
                className="me-4 ms-0 text-center "
                aria-label="Search"
                style={{width : "75%"}}
              
              
            />
            <Nav className="me-auto">
            
            {
              userData?.name ? ( 
          <>
          <NavDropdown title={userData?.name +  (userData?.role === "admin" ? " - " + "(Admin)" : "")} id="collapsible-nav-dropdown" className="justify-content-center" 
          
          style={{padding : "0"}}>
              {userData?.role === "admin" ? (
                <NavDropdown.Item href="/admin/allproducts">لوحة التحكم</NavDropdown.Item>
              ) : (
                
                <NavDropdown.Item href="/user/profile">الصفحه الشخصيه</NavDropdown.Item>
              )}
              <NavDropdown.Divider/>
              <NavDropdown.Item onClick={logOut} href="/login">تسجيل الخروج</NavDropdown.Item>
            </NavDropdown> 
            <Nav.Link href='/user/profile'  
      
                    style={{ color: "white" , marginTop :"13px", marginRight : "0" , marginLeft : "10px"}}>
                    <img src={`${base_url_string}${userData?.profileImage}`} className="" alt="sfvs" style={{width : "30px" , height : "30px" , borderRadius :"50%"}} />

                </Nav.Link>
          </>
                )
                 : (    <Nav.Link href='/login'
                    className="nav-text d-flex mt-3 justify-content-center">
                    <img src={login} className="login-img ms-1" alt="sfvs"/>
                    <p style={{ color: "white" }}>دخول   </p>
                </Nav.Link>)
            }

            


                <Nav.Link href='/cart'
                    className="nav-text d-flex mt-3 justify-content-center position-relative ms-auto"
                    style={{ color: "white" }}>
                    <div className="position-relative">
                    <img src={cart} className="login-img ms-1" alt="sfvs" />
                      {cartLength ? (<span className="badge-span position-absolute bg-danger rounded-circle text-center">
                      {cartLength}
                      </span>) : null}
                    </div>
                    <p style={{ color: "white" }}>العربه</p>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

export default NavBarLogin;

