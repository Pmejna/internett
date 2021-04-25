import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import miejscowosci from '../../assets/texts/miejscowosci.json';

console.log(miejscowosci);
const SearchWrapper = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    background-color: var(--main-red);
    position: relative;

    input {
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

`;


const Search = ({places}) => {
    const [state, setState] = useState({data: []});
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    const [matchList, setMatchList] = useState([]);
    const handleList = (searchTerm) => {
        if (searchTerm !== '') {
            console.log(searchTerm);
            const newTable = [];
            miejscowosci.map(place => {
                if (place.place.toLowerCase().match(searchTerm.toLowerCase())) {
                    console.log(place.place.toLowerCase().match(searchTerm));
                    newTable.push(<a href={`/zasieg/${place.link}`}>{place.place}</a>);
                }
            });
            console.log(matchList);
            setMatchList(newTable);
        }         
    }

    useEffect(() => {
        handleList(searchTerm);
    }, [searchTerm]);

    return (
        <SearchWrapper state={state} searchTerm={searchTerm} places={miejscowosci}>
            <input type="text" placeholder="Wyszukaj..." onChange={handleSearch}></input>
            <h3>Wyszukiwarka zasięgu</h3>
            <SearchBox>
                {searchTerm.length > 0 ? 
                matchList : null}
            </SearchBox>
        </SearchWrapper>
    )
};

export default Search