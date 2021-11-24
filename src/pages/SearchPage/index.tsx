import React from 'react';
import { Redirect } from 'react-router-dom';
import { SearchBox, SearchWrapper } from './search.style';


const SearchPage = () => {

    let token = sessionStorage.getItem('atk');

    if (!token) {
        return <Redirect to='/login' />
    }
    return (
        <SearchWrapper>
            <SearchBox>
                <input className="search_input" placeholder="Search" />
                <button className="search_btn">Search</button>
            </SearchBox>
        </SearchWrapper>
    )
};

export default SearchPage;