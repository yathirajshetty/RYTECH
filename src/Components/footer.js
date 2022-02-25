import React from 'react';
import '../Styles/footer.css';
import {BsFacebook } from "react-icons";
// import SimpleReactFooter from "simple-react-footer";
import { FaFacebook, FaInstagram, FaGooglePlus, FaWhatsapp,FaAngleRight } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { GrServices } from "react-icons/gr";
const Footer =()=>{
   
           
    return(
        <>
            <div className="footer">
                <div className="footer-grid">
                <div style={{marginTop:20}}>
                        <center><img src="../../images/RY_LOGO.png" className="footer-img" /></center>
                        <p className="footer-parag">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div  style={{marginTop:20}}>
                <div className="foot-ser-grid">
                    <div>
                   <center> <h3 className="head-text"><span><GrServices />&nbsp;&nbsp;</span>Services</h3>
                    <ul>
                        <li className="foot-ser"><span><FaAngleRight /></span>About us</li>
                        <li className="foot-ser"><span><FaAngleRight /></span>Services</li>
                        <li className="foot-ser"><span>&nbsp;&nbsp;&nbsp;<FaAngleRight /></span>Contact us</li>
                        <li className="foot-ser"><span><FaAngleRight /></span>Sign in</li>
                    </ul></center>
                    </div>
                    <div>
                    </div>
                    </div>
                </div>
                    <div  style={{marginTop:20}}>
                       <center><h3 className="head-text"><spn><GoLocation className="location-icon" />&nbsp;&nbsp;</spn>Locations</h3>
                      <li>Belagavi</li>
                      <li>Mangalore</li>
                      <li>Raichur</li></center> 
                    </div>
                </div>
                <ul style={{display:"flex", textAlign:"center", justifyContent:"center"}}>
                    <li className="social-icon"><FaFacebook style={{fontSize: 30}} /></li>
                    <li className="social-icon"><FaInstagram style={{fontSize: 30}} /></li>
                    <li className="social-icon"><FaGooglePlus style={{fontSize: 30}} /></li>
                    <li className="social-icon"><FaWhatsapp style={{fontSize: 30}} /></li>
                </ul>
                <div className="footer-bottom-line">

                </div>
                <div className="footer-copyright">
                        <h4 className="copyright-text">© Copyright<strong><span> RYTECH</span></strong> . All Rights Reserved<br />Designed by RYTECH</h4>
                </div>
            </div>
           
             {/* <SimpleReactFooter 
    description={description} 
    title={title}
    columns={columns}
    linkedin="fluffy_cat_on_linkedin"
    facebook="fluffy_cat_on_fb"
    twitter="fluffy_cat_on_twitter"
    instagram="fluffy_cat_live"
    youtube="UCFt6TSF464J8K82xeA?"
    pinterest="fluffy_cats_collections"
    copyright="RYTECH"
    iconColor="black"
    backgroundColor="#17a3a8"
    fontColor="black"
    copyrightColor="darkgrey"
 />;    */}

        </>
    )
}
export default Footer;