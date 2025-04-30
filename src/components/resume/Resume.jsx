import React from 'react';
import { NavLink } from 'react-router-dom';
import image1 from '../Img/template1.jpg';
import image2 from '../Img/template2.png';
import image3 from '../Img/template3.png';
import './templateStyles.css'; 

export default function Resume() {
  return (
    <>
      <div className="temp">
        <NavLink to='/Template1'>
          <img src={image1} alt="" className="template-image" />
        </NavLink>
        <NavLink to='/Template2'>
          <img src={image2} alt="" className="template-image" />
        </NavLink>
        <NavLink to='/Template3'>
          <img src={image3} alt="" className="template-image" />
        </NavLink>
       </div> 
    </>
  );
}
