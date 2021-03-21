import { Button, Nav, Navbar } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        
        <Navbar bg="dark" variant="dark">
            
            <Link to='/home' className='nav-link'>Unique Riders</Link>
            <Nav className="mr-auto">
                <Link to='/home' className='nav-link'>Home</Link>
                <Link to='/destination' className='nav-link'>Destination</Link>
                
            </Nav>

           { loggedInUser.email ?<h3 className="name">{loggedInUser.name}</h3> : <Link to='/login'><Button variant="outline-info">LogIn</Button></Link> 
            }
        </Navbar>

    );
};

export default Header;