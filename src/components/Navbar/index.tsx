import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '../../GlobalStyles/index.styles';
import { Nav, NavContent, ProfileContainer } from './nav.style';
import logo from '../../assets/icons/logo.svg';
import dropdownDown from '../../assets/icons/dropdown-down.svg';



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

                    <ProfileContainer>
                        <div className="dp">
                            <span>JD</span>
                        </div>
                        <div className="fn">
                            <span>John Doe</span>
                            <img src={dropdownDown} alt='digidropdown Down icon' />
                        </div>
                    </ProfileContainer>
                </NavContent>
            </Container>
        </Nav>
    )
};

export default NavBar;