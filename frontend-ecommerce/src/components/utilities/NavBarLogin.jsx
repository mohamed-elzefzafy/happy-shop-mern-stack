import { Container, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png"
import login from "../../images/login.png"
import cart from "../../images/cart.png";
import { Link } from "react-router-dom";
import UseNavbarSearchHook from "../../customHooks/search/UseNavbarSearchHook";


const NavBarLogin = () => {
const [searchWord , onChangeSearch ] = UseNavbarSearchHook();

// let word = "";
// if (localStorage.getItem("searchWord") != null)
// word = localStorage.getItem("searchWord")


let word = "";
if (searchWord != null)
word = searchWord
else
word = ""
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
                <Nav.Link href='/login'
                    className="nav-text d-flex mt-3 justify-content-center">
                    <img src={login} className="login-img" alt="sfvs" />
                    <p style={{ color: "white" }}>دخول   </p>
                </Nav.Link>
                <Nav.Link href='/cart'
                    className="nav-text d-flex mt-3 justify-content-center"
                    style={{ color: "white" }}>
                    <img src={cart} className="login-img" alt="sfvs" />
                    <p style={{ color: "white" }}>العربه</p>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

export default NavBarLogin;