import React from "react";

const Footer =()=>{
const thisDate = new Date();    
    return(
<footer>
<p>
    Copyright { thisDate.getUTCFullYear()    } </p>
    </footer>)}
export default Footer;
