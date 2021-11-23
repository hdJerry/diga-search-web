import React from 'react';
import { Redirect } from 'react-router-dom';
import { SearchWrapper } from './search.style';


const SearchPage = () => {

    let token = sessionStorage.getItem('atk');

    if (!token) {
        return <Redirect to='/login' />
    }
    return (
        <SearchWrapper>
            <h4>Search Page</h4>
        </SearchWrapper>
    )
};

export default SearchPage;