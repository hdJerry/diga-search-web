import React from 'react';
import { AuthCard, AuthWrapper } from './auth.style';
import logo from '../../assets/icons/logo.svg';

const AuthPage = () => {

    return (
        <AuthWrapper>
            <AuthCard>
                <p className="logo">
                    <img src={logo} alt='digilogo'/>
                    <span>Diga Search</span>
                </p>
                <button className="auth_btn">Login with Github</button>
            </AuthCard>
        </AuthWrapper>
    )
};


export default AuthPage;