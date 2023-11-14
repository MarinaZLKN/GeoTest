import React from 'react';
import '../../styles/Header.css'
import  pic from '../images/image 55.png'
function Logo (){

    return(
        <div className="logo">
           <img src={pic} alt="picture" width='1100' height='350'/>
        </div>
    );
};

export default Logo;