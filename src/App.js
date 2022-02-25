import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Header from './Components/header';
import Home from './Pages/home';
const App =()=> {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/'  element={<Home />} />
        {/* <Route path='home'  element={} />
        <Route path='about'  element={} />
        <Route path='contact'  element={} />
        <Route path='service'  element={} />
        <Route path='register'  element={} />
        <Route path='login'  element={} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
