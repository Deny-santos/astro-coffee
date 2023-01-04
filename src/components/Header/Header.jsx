import React from 'react'
import { GiWolverineClaws } from "react-icons/gi"
import { Link } from 'react-router-dom'
// import { Navbar, Container, NavbarBrand, Nav,  } from "react-bootstrap"
import "./headerStyle.css"

const Header = () => {
  return (
    <header>
        {/* <Navbar className='bg-dark d-flex'>
            <Container className='bg-light w-25'>
                <NavbarBrand>
                    <GiWolverineClaws className='text-danger logo font-size-25 bg-dark'/>
                </NavbarBrand>
                <Nav.Item>
                    <Nav.Link href='pages/Vectors/Vectors'>Vectors</Nav.Link>
                </Nav.Item>
                
            </Container>
        </Navbar> */}


        <div className='content'>
            <div>
                <Link to="/">
                    <GiWolverineClaws />
                </Link>
                <nav>
                    <ul>
                        <li><Link to="/vectors">Vector</Link></li>
                        <li><Link to="/photos">Phothos</Link></li>
                        <li><Link to="/psd">Psd</Link></li>
                        <li><Link to="/videos">Videos</Link></li>
                    </ul>
                </nav>
            </div>
            <button>+Submit</button>
        </div>
    </header>
  )
}

export default Header