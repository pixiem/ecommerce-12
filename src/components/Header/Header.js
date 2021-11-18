import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <div className=" row" >
     
      <div className="col-md-6 com-sm-12 div-one">
        <h1>BE SMART WITH TECHNOLOGY</h1>
        <h5>Authentic And Genuine Product</h5>
        <span>
        <Link className="link" to="/allproducts" >EXPLORE</Link>
        </span>
      </div>
      <div className="col-md-6 col-sm-12">
               <img width="400px" src="./computer-monitor-graphic-animator-creating-video-game-modeling-motion-processing-video-file-using-professional-editor-vector-illustration-graphic-design-art-designer-workplace-concept_74855-13038.jpg" alt="" /> 
      </div>
        
        </div>
    );
};

export default Header;
