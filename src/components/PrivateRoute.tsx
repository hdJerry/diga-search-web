import React from 'react'
import { Route, Redirect, useHistory } from 'react-router-dom';
import NavBar from './Navbar';

type AppProps = {
    redirectTo: any,
    component: any,
    path: string,
    exact: boolean
}

const PrivateRoute = ({ component: Component, redirectTo, ...otherProps }: AppProps) => {

    let token = sessionStorage.getItem('atk');

    let {location: {pathname}} = useHistory();
    

    return (
        <React.Fragment>

            <Route
                {...otherProps}
                render={(props: any)=> {
                    return (
                        (
                        token
                            ?
                            (
                                <>
                                <NavBar isRepo={pathname === '/repo'} />
                                <Component {...props} />
                                </>
                            )
                            :
                            <Redirect to={redirectTo ? redirectTo : '/login'} />
                        )
                    )
                }

                }
            />
        </React.Fragment>
    )

}

export default PrivateRoute;
