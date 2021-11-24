import React from 'react';
import { Redirect } from 'react-router-dom';
import { searchGithub } from './function';
import { SearchBox, SearchWrapper } from './search.style';


const SearchPage = () => {

    const [searching, setSearching] = React.useState(false);
    const [search, setSearch] = React.useState('');

    let token = sessionStorage.getItem('atk');

    if (!token) {
        return <Redirect to='/login' />
    }

    const spinner = () => (
        <span className="spinner">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM1.8 9C1.8 12.9764 5.02355 16.2 9 16.2C12.9764 16.2 16.2 12.9764 16.2 9C16.2 5.02355 12.9764 1.8 9 1.8C5.02355 1.8 1.8 5.02355 1.8 9Z" fill="white" fillOpacity="0.4" />
                <path d="M9 17.1C9 17.5971 8.59606 18.0047 8.10149 17.955C6.82775 17.8272 5.59228 17.4288 4.47939 16.7823C3.10633 15.9847 1.96873 14.838 1.18206 13.4587C0.395399 12.0793 -0.0123228 10.5164 0.000283631 8.92855C0.0128901 7.34069 0.445376 5.78443 1.25384 4.41775C2.06231 3.05106 3.21797 1.9226 4.60352 1.14691C5.98908 0.371223 7.55519 -0.0240775 9.1429 0.0011345C10.7306 0.0263465 12.2834 0.471174 13.6436 1.29046C14.7461 1.95451 15.6903 2.8454 16.4157 3.90019C16.6973 4.30974 16.5346 4.86005 16.099 5.09941C15.6633 5.33877 15.1205 5.17551 14.8287 4.77312C14.2632 3.99339 13.5452 3.33247 12.7149 2.83237C11.6267 2.17694 10.3845 1.82108 9.11432 1.80091C7.84415 1.78074 6.59126 2.09698 5.48282 2.71753C4.37438 3.33808 3.44985 4.24085 2.80307 5.3342C2.1563 6.42755 1.81031 7.67255 1.80023 8.94284C1.79014 10.2131 2.11632 11.4635 2.74565 12.5669C3.37498 13.6704 4.28506 14.5878 5.38351 15.2258C6.22164 15.7127 7.14666 16.0237 8.10232 16.1438C8.5955 16.2058 9 16.6029 9 17.1Z" fill="white" />
            </svg>
        </span>
    );

    const beginSearch = async () => {

        setSearching(true);
        let response = await searchGithub(search, token);

        console.log(response);

        setSearching(false);
        
        
    };
    return (
        <SearchWrapper>
            <SearchBox>
                <input className="search_input" placeholder="Search" onChange={(e) => setSearch(e.currentTarget.value)} />
                <button disabled={searching || !search} className="search_btn" onClick={beginSearch}>
                    {
                        searching ?
                        (
                           spinner()
                        )
                        :
                        (
                        <span>Search</span>
                        )
                    }
                </button>
            </SearchBox>
        </SearchWrapper>
    )
};

export default SearchPage;