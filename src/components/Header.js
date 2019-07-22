import React  from 'react';
import logo from '../../public/images/logo.png'
class Home extends React.Component {
  render() {
    return (  
       <header id="header">
       <div className="container"> 
         <nav className="navbar navbar-expand-lg ">
              <a className="navbar-brand" id="logo" href="http://localhost:3000/"> <img width="200" src={logo} alt="logo" title="logo"/></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button> 
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link"  href="http://localhost:3000/">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#about">Services</a>
                  </li>
                   <li className="nav-item">
                    <a className="nav-link disabled" href="#services">Salustions</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#works">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#contact">Contact Us</a>
                  </li>
                </ul> 
              </div>
            </nav>
            
       </div>
     </header> 
    );
  }
}

export default Home;