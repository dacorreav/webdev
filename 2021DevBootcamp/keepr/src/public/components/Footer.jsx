import React from "react";
import ReactDOM from "react-dom";

const Footer =()=>{
const thisDate = new Date;    
    return(
<footer>
<p>
    Copyright { thisDate.getUTCFullYear()    } </p>
    </footer>)}
export default Footer;
