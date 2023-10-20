import { Container, FormControl, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png"
import login from "../../images/login.png"
import cart from "../../images/cart.png";
import { Link, useNavigate } from "react-router-dom";
import UseNavbarSearchHook from "../../customHooks/search/UseNavbarSearchHook";
import { useEffect, useState } from "react";
import { getLoggedUser } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import UseGetLoggedUserData from "../../customHooks/auth/UseGetLoggedUserData";


const NavBarLogin = () => {
const [searchWord , onChangeSearch ] = UseNavbarSearchHook();
const navigate = useNavigate();
// const [user, setUser] = useState("");
// const dispatch = useDispatch();

const [userData] = UseGetLoggedUserData();

let word = "";
if (searchWord != null)
word = searchWord
else
word = ""



// useEffect(() => {
//   if (localStorage.getItem("user") !=  null) 
//   {
//     setUser(JSON.parse(localStorage.getItem("user")).name)
//   }
// },[user])
const logOut = () => {
  localStorage.removeItem("token");

  // localStorage.removeItem("user");
  // setUser("");
}

// const getUserData = async () => {
// await dispatch(getLoggedUser());
// }
// useEffect(() => {
// getUserData();
// setUser(res?.data?.name);
// },[user])

// const res = useSelector((state) =>  state.auth.currentUser)
// if (res)
// console.log(res?.data?.name);

console.log(userData);

  return (
    <Navbar className="sticky-top mastercolor" /* bg="dark" */ variant="dark"  expand="sm">
    <Container>
        <Navbar.Brand>
          <Link to="/">
          <img src={logo} className='logo' alt="Logo"/>
          </Link>
              
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <FormControl
              value={word}
              onChange={(e) => onChangeSearch(e)}
                type="search"ngeSea
                placeholder="ابحث..."
                className="me-2 w-100 text-center"
                aria-label="Search"
              
              
            />
            <Nav className="me-auto">
            
            {
              userData?.name ? ( 
               <NavDropdown title={userData?.name} id="collapsible-nav-dropdown" >
              <NavDropdown.Item href="/user/profile">الصفحه الشخصيه</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item onClick={logOut} href="/">تسجيل الخروج</NavDropdown.Item>
            </NavDropdown> 
                )
                 : (    <Nav.Link href='/login'
                    className="nav-text d-flex mt-3 justify-content-center">
                    <img src={login} className="login-img ms-1" alt="sfvs"/>
                    <p style={{ color: "white" }}>دخول   </p>
                </Nav.Link>)
            }
                <Nav.Link href='/cart'
                    className="nav-text d-flex mt-3 justify-content-center"
                    style={{ color: "white" }}>
                    <img src={cart} className="login-img ms-1" alt="sfvs" />
                    <p style={{ color: "white" }}>العربه</p>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

export default NavBarLogin;