import React from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbardiv=styled.div`
display : flex;
border : 2px solid red ;
padding : 20px;
`



const NavbarComponentsdiv=styled.div`
padding : 20px;
`


let Navbar= () => {
    return (
        <Navbardiv>
             <NavbarComponentsdiv><Link to="/">Home</Link></NavbarComponentsdiv>
             <NavbarComponentsdiv><Link to="/products">Products</Link></NavbarComponentsdiv>            
        </Navbardiv>
    )
}

export default Navbar;