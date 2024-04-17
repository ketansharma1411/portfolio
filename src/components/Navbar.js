import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar,Container } from 'react-bootstrap'

export const NavBar=()=>{
    const [activeLink,setActiveLink]=useState('home')
    const [scrolled,setScrolled]=useState(false)

    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY>50){
                setScrolled(true)
            }
            else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll',onScroll)

        return()=>{window.removeEventListener('scroll',onScroll)}
    },[])
    const onUpdate=(value)=>{
        setActiveLink(value)
    }
    return(
        <Navbar  className={scrolled?"scrolled":''}>
        <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toogle-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdate('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=>onUpdate('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-link':'navbar-link'} onClick={()=>onUpdate('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='#'><img src={} alt=''></img></a>
                <a href='#'><img src={} alt=''></img></a>
                <a href='#'><img src={} alt=''></img></a>
            </div>
            <button className='vvd' onClick={()=>{console.log("Let's connect")}}
            ><span>Lets's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
    
} 