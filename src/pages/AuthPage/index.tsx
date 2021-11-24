import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { AuthCard, AuthWrapper } from './auth.style';
import logo from '../../assets/icons/logo.svg';
import LoginGithub from 'react-login-github';

const AuthPage = () => {

    const [clientId,] = React.useState('4f262cc9e20d3043da02');
    let token = sessionStorage.getItem('atk');

    let { location: { state } } = useHistory();
    let router = useHistory();

    if (token) {
        if (state && state.path) {
            return <Redirect to={state.path} />
        }
        return <Redirect to="/search" />
    }

    const authorize = (data: object) => {
        fetch('https://9uj0ihoex6.execute-api.eu-west-1.amazonaws.com/dev/auth',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(data => data.json())
        .then(({ message, data }) => {
            if (message === 'success') {
                sessionStorage.setItem('atk', data.access_token);
                router.push('/');
            }
        })
        .catch(error => console.log(error))
    };

    return (
        <AuthWrapper>
            <AuthCard>
                <p className="logo">
                    <img src={logo} alt='digilogo'/>
                    <span>Diga Search</span>
                </p>
                <LoginGithub className="auth_btn" clientId={clientId}
                    onSuccess={(data: object) => authorize(data)}
                    onFailure={() => console.log('fail')}>
                    Login with Github
                </LoginGithub>
            </AuthCard>
        </AuthWrapper>
    )
};


export default AuthPage;