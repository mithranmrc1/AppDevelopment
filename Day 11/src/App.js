
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import Login from './Login';
import Register from './Register';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import Sidebar from './layout/Sidebar';
import Home from './layout/Home';
import Contact from './layout/Contact';
import Services from './layout/Services';
import Feedback from './layout/Feedback';
import Terms from './layout/Terms';
import Footer1 from './layout/Footer1'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/loginbtn" element={<NavBar/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/que" element={<Sidebar/>}/>
      <Route path="/product" element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/s' element={<Services/>}/>
     <Route path='/Feedback' element={<Feedback/>}/>
     <Route path='/terms' element={<Terms/>}/>
     <Route path='/Footer1' element={<Footer1/>}/>

      </Routes>
     
    
    </BrowserRouter>
  </div>
  );
}

export default App;