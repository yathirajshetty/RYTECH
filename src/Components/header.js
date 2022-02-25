import React, {useState} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { FaAlignRight } from 'react-icons/fa'; 
import '../Styles/header.css';
const Header =({ sticky })=>{
    const [state,setState] = useState({
        isOpen: false
    })
    // const state = {
    //     isOpen: false
    //   };
      
      const toggleCollapse = (e) => {
        e.preventDefault();
        setState({ isOpen:!state.isOpen });
      }
    return(
        <>
       <div className="mobileview">
       <div className="navBar">
                  <div className="mobile-layout">
                     <img src="../../images/RY_LOGO.png" />
                  <button onClick={toggleCollapse}>
                        <FaAlignRight color="17a3a8" />
                    </button>
                  </div>
                   <ul className={state.isOpen ? "nav-links show-nav" : "links"}>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Service</li>
                        <li>Contact</li>
                        <li>Sign in</li>
                    </ul>
                    
              </div>
       </div>
           
       <div className="laptopview">
       <div className="lap-navBar">
                   <img src="../../images/RY_LOGO.png"  />
                   <ul className="list-layout">
                        <li className="list-li">Home</li>
                        <li className="list-li">About us</li>
                        <li className="list-li">Service</li>
                        <li className="list-li">Contact</li>
                        <li  className="list-li">Sign in</li>
                    </ul>
                    
              </div>
       </div>
                    

        </>
    )
}
export default Header;