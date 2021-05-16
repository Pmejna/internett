import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import miejscowosci from '../../assets/texts/miejscowosci.json';

const SearchWrapper = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: var(--main-padding);
    margin-top: 3rem;
    background-color: var(--main-red);
    position: relative;

    input {
        min-width: 300px;
        display: block;
        border: 0 transparent;
        border-radius: 0.4rem;
        padding: 1rem 2.2rem;
    }

    h3 {
        color: #fff;
        font-size: 1.3rem;
        text-transform: uppercase;
    }

    @media (max-width: 760px) {
        height: unset;
        flex-direction: column-reverse;
        align-items: flex-start;
        padding: 2rem 10vw;

        h3 {
            text-align: left;
        }
    }
`;

const SearchBox = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    border: 2px solid var(--main-red);


    a {
        text-decoration: none;
        color: var(--main-dark);
    }
    li {
        max-width: 300px;

    }
    li:hover {
        cursor: pointer;
        a { 
            font-size: 2.1rem;
        }
    }
    a:hover {
        transform: scale(1.5);
    }
    ul {
        padding: var(--main-padding);
        list-style: none;
    }

    @media (max-width: 760px) {
        font-size: 2.4rem;
        padding: none;

       ul { padding: 2rem 10vw;
       }
       a {
           font-size: 2rem;
       }
     }

`;


const Search = ({places}) => {
    const [matchList, setMatchList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isActive, setIsActive] = useState(false);

    let searchField = useRef(null);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleList = (searchTerm) => {
        if (searchTerm !== '') {
            const newTable = [];
            miejscowosci.map(place => {
                if (place.place.toLowerCase().match(searchTerm.toLowerCase())) {
                    console.log(place.place.toLowerCase().match(searchTerm));
                    newTable.push(<li key={place.link}><Link to={`/zasieg/${place.link}`}>{place.place}</Link></li>);
                }
            });
            setMatchList(newTable);
        }
        
        else {
            setMatchList([]);
        }
    };

    // const handleIsFocused = () => {
    //     setIsActive(true)
    //     console.log('focused');
    //     console.log(isActive);
    // };
    // const handleIsUnFocused = () => {
    //     setIsActive(false);
    //     setSearchTerm('');
    //     console.log('unfocused');
    // };

    useEffect(() => {
        handleList(searchTerm);
    }, [searchTerm]);

    return (
        <SearchWrapper searchTerm={searchTerm} places={miejscowosci}>
            <input type="text" placeholder="Wyszukaj..." onChange={handleSearch} ref={el => searchField = el}></input>
            <h3>Wyszukiwarka zasięgu</h3>
            <SearchBox>
                {searchTerm.length > 0 ? 
                <ul>
                    {matchList}
                </ul>
                 : null}
            </SearchBox>
        </SearchWrapper>
    )
};

export default Search