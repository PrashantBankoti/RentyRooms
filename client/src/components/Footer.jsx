import React from "react";

const currentTime = new Date();
const getYear = currentTime.getFullYear(); 

function Footer(){
    return(
        <div>
        <footer>
            <div className="links">
                <a href="/#"><i className="fab fa-facebook"></i></a>
                <a href="/#"><i className="fab fa-instagram"></i></a>
                <a href="/#"><i className="fab fa-youtube"></i></a>
                <a href="/#"><i className="fab fa-twitter"></i></a>
            </div> 
            <div className="copyright">
                 <p className="mb-0">Copyright 	&copy; {getYear} <a href="/" className="text-white">RentyRooms</a></p>
            </div>
       
        </footer>
        </div>
    )
}

export default Footer;