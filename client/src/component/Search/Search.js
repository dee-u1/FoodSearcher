import React, { useEffect, useState }   from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setSearchCriteria } from "../../redux/reducers/search-reducer";
import SearchResult from './SearchResult';
import { filter } from "../../redux/reducers/food-reducer";
import TextField from '@material-ui/core/TextField';

const SearchFood = (props) => {
    const [searchWord, setSearchWord]=useState('');
    
    const history = useHistory();
    const dispatch = useDispatch();

    const searchValueChanged = (e) => {
        setSearchWord(e.target.value);
        dispatch(filter(e.target.value)); //filter foods stored in redux store
    }    
    
    const btnSearchClick = () => {
         if (searchWord.trim().length > 0){
            dispatch(setSearchCriteria(searchWord)); 
            history.push("/searchresult");
         }
    }

    return (
        <div>
            <div className="search-wrapper">
                <div className="search-inner">    
                    <TextField
                        variant="outlined"
                        margin="normal"
                        id="search"
                        label="search"
                        name="search"
                        autoFocus
                        value={searchWord}
                        onChange={searchValueChanged}
                    />                                                
                </div>
                <SearchResult />
            </div>            
        </div>      
    );
}

export default SearchFood;