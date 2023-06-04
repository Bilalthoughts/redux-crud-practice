import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

const Layout =(props)=>{

    return(<>
    
    <Navbar bg="dark" variant="dark">
<Navbar.Brand href="#home" >Cars</Navbar.Brand>
    </Navbar>

    <Container>{props.children}</Container>
    </>
)}

export default Layout;