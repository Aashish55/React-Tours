import React, { Component } from 'react';
import styled from 'styled-components';

const Searchbar = styled.input`
    background: #ffffff;
    border: 2px solid #aaa;
    border-radius: 2.2rem;
    font-size: 2rem;
    background-image: url('https://img.icons8.com/pastel-glyph/2x/search.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left center;
    padding: 1rem 4.5rem;
    width: 85%;
    outline: none;
    margin: 1.5rem 2rem;
    color: #888;
`;

class SearchBar extends Component {
    state = {  }
    render() { 
        return (
            <Searchbar type = 'text' placeholder='Discover places...' />
        );
    }
}
 
export default SearchBar;