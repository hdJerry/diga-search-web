import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '../../GlobalStyles/index.styles';
import { Nav, NavContent, NavSearch, ProfileContainer } from './nav.style';
import logo from '../../assets/icons/logo.svg';
import dropdownDown from '../../assets/icons/dropdown-down.svg';
import searchIcon from '../../assets/icons/search-icon.svg';


type AppProps = {
    isRepo: boolean
};

const NavBar = ({isRepo}: AppProps) => {

    console.log(isRepo);
    
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

                    <NavSearch>
                        <input className="search_input" placeholder="Search" />
                        <button className="search_btn">
                            <img src={searchIcon} alt='search icon' />
                        </button>
                    </NavSearch>

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