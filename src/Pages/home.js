import React ,{useState} from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem,  MDBContainer } from "mdbreact";
import { Container } from '@mui/material';
import '../Styles/home.css';
import Typewriter from "typewriter-effect";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useNavigate} from 'react-router-dom';
import Footer from '../Components/footer';
import { BsCursor } from "react-icons/bs";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home =()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 480 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 480, min: 0 },
          items: 1
        }
      };
      const [state,setState]= useState({
          name:'',
          email:'',
          mobile:'',
          message:''
      });
      const [error,setError]= useState("");
      const navigate= useNavigate();
      const onSubmitHandle = async(e)=>{
            e.preventDefault();
            if(!name || !email || !mobile | !message)
            {
                setError("Enter All Fields")
            }
            else{
                try{
                    const response = await fetch("https://v1.nocodeapi.com/yathirajshtt/google_sheets/DefFPsDpicBsIVxE?tabId=Sheet1",{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify([[name,email,mobile,message, new Date().toLocaleDateString()]])
                    });
                    await response.json();
                    setState({ ...state, name:"", email:"", mobile:"", message:""});
                    navigate('/');
                }catch(err){
                    console.log(err);
                }
            }
      }
      const onChangeHandle =(e)=>{
        const {name,value} = e.target;
        setState({...state,[name]: value}); 
      }
      const {name,email,mobile,message}= state;
    return(
        <>
        <section>
         <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
          
             <div className="slide-grid">
                 <div class="one">
               
                     <h1 className="slider-text"><span style={{color:"#0c0c0c"}}>GET YOUR</span> <br/>
                    <span style={{color:"#17a3a8"}}> <Typewriter 
                       options={{
                        strings: ['IT SUPPORT FOR BUSINESS', 'IT SUPPORT FOR HOME', 'DATA RECOVERY EXPERTS','ONSITE SERVICE'],
                        autoStart: true,
                        loop: true,
                      }} 
                     /></span></h1>
                    <button className="slider-btn">Get Started</button>
                 </div>
                 <div class="two" >
                     <img src="../images/4300580_ccexpress.png" class="slider-img-1" width="100%" />
                 </div>
             </div>
            
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            
          <div className="slide-grid">
                 <div class="one">
                 <h1 className="slider-text"><span style={{color:"#0c0c0c"}}>GET YOUR</span> <br/>
                    <span style={{color:"#17a3a8"}}> <Typewriter 
                       options={{
                        strings: ['WEB DEVELOPMENT', 'WEB DESIGN', 'WEB HOSTING'],
                        autoStart: true,
                        loop: true,
                      }} 
                     /></span></h1>
                    <button className="slider-btn">Get Started</button>
                 </div>
                 <div class="two" >
                     <img src="../images/Slide2.jpg" class="slider-img-1" width="100%" />
                 </div>
             </div>
           
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
           
          <div className="slide-grid">
                 <div class="one">
                 <h1 className="slider-text"><span style={{color:"#0c0c0c"}}>GET YOUR</span> <br/>
                    <span style={{color:"#17a3a8"}}> <Typewriter 
                       options={{
                        strings: ['Data Recovery', 'CCTV DVR Data Recovery'],
                        autoStart: true,
                        loop: true,
                      }} 
                     /></span></h1>
                    <button className="slider-btn">Get Started</button>
                 </div>
                 <div class="two" >
                     <img src="../images/Slide3.jpg" class="slider-img-1" width="100%" />
                 </div>
             </div>
           
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    </section>
    <section>
         <center> <h5 className="about-title">About Us</h5>
         <h2  className="about-sub-title"> Why <span style={{color:"#17a3a8"}}>Ry Tech</span></h2></center>
         <div className="about-text-grid">
                <div className="about-text">
                <p className="about-paragh">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br /> 
                <p className="about-paragh">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div>
                    <img src="../images/aboutus.jpg" width="100%" style={{textAlign:"center", verticalAlign:"middle", borderStyle:"none"}} />
                </div>
         </div>
                     
    </section>
    <section>
    <center> <h5 className="about-title">Services</h5>
    <h2  className="about-sub-title">  <span style={{color:"#17a3a8"}}>Blogs</span></h2></center>
    <Carousel responsive={responsive}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="../images/Service1.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
        Computer/Laptop Repair
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="../images/Service2.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
        Web Development
        </Typography>
      </CardContent>
    </Card>

     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="../images/Service3.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
        Student <br /> Projects
        </Typography>
      </CardContent>
    </Card>

     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="../images/Service4.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
        Web <br />Hosting
        </Typography>
      </CardContent>
    </Card>

     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="../images/Service5.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
        Logo <br />Designing
        </Typography>
      </CardContent>
    </Card>

     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="../images/Service6.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
        Video <br />Editing
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="../images/Service7.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
        Poster<br/>Designing
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="../images/Service8.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
        Data<br/>Recovery
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="../images/Service9.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
        CCTV DVR <br/>Data Recovery
        </Typography>
      </CardContent>
    </Card>

    {/* <div className="ui link cards"><div className="card"> <div className="image"><img src="../images/Service1.png" width="300" height="300"/></div><div className="content"> <div className="header"><h3 style={{textAlign:"center"}}>Computer/Laptop Repair</h3></div></div></div></div>
    <div className="ui link cards"><div className="card"> <div className="image"><img src="../images/Service2.jpg" width="300" height="300"/></div><div className="content"> <div className="header">Web Development</div></div></div></div> 
    <div className="ui link cards"><div className="card"> <div className="image"><img src="../images/Service3.png" width="300" height="300"/></div><div className="content"> <div className="header">Student Projects</div></div></div></div> 
    <div className="ui link cards"><div className="card"> <div className="image"><img src="../images/Service1.png" width="300" height="200"/></div><div className="content"> <div className="header">Web Hosting</div></div></div></div> 
    <div className="ui link cards"><div className="card"> <div className="image"><img src="../images/Service1.png" width="300" height="200"/></div><div className="content"> <div className="header">Logo Designing</div></div></div></div>  
    <div className="ui link cards"><div className="card"> <div className="image"><img src="../images/Service1.png" width="300" height="200"/></div><div className="content"> <div className="header">Video Editing</div></div></div></div> 
    <div className="ui link cards"><div className="card"> <div className="image"><img src="../images/Service1.png" width="300" height="200"/></div><div className="content"> <div className="header">Poster Designing</div></div></div></div>  */}

    </Carousel>
    </section>
    <section>
    <center> <h5 className="contact-title">Contact Us</h5>
    <h2  className="contact-sub-title">  <span style={{color:"#17a3a8"}}>Write to Us</span></h2></center>
        <div>
            <Container>
                
                    <form onSubmit={onSubmitHandle}>
                        <h2>{error}</h2>
                         <div class="input-field">
                            <input type="text" id="name" name="name" value={name} onChange={onChangeHandle} required />
                            <label for="name">Your name:</label>
                        </div>
                        <div class="input-field">
                            <input type="email" id="email" name="email" value={email} onChange={onChangeHandle}  required />
                            <label for="email">Your Email:</label>
                        </div>
                        <div class="input-field">
                            <input type="tel" id="mobile" name="mobile" value={mobile} onChange={onChangeHandle}  pattern="^\d{10}$"  required />
                            <label for="mobile">Your Phone Number:</label>
                        </div>
                        <div class="input-field">
                            <textarea type="text" id="message" name="message" value={message} onChange={onChangeHandle}  required></textarea>
                            <label for="message">Message:</label>
                        </div>
                        <div  class="input-field">
                            <button type="submit" className="contact-btn" onChange={onChangeHandle} ><span><BsCursor /></span>Send</button>
                        </div>
                    </form>
            
            </Container>
        </div>
    </section>
    <section>
        <Footer />
    </section>
        </>
    )
}
export default Home;