import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '../../GlobalStyles/index.styles';
import { Nav, NavContent } from './nav.style';
import logo from '../../assets/icons/logo.svg';


const NavBar = () => {


    return (
        <Nav>
            <Container>
                <NavContent>
                    <NavLink to="/">
                        <p className="logo">
                            <img src={logo} alt='digilogo' />
                            <span>Diga Search</span>
                        </p>
                    </NavLink>

                    <div></div>
                </NavContent>
            </Container>
        </Nav>
    )
};

export default NavBar;