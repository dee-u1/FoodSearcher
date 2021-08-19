import React, { useEffect, useState } from 'react';
import Food from './Food';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearFiltered } from '../../redux/reducers/food-reducer';
import { Button } from '@material-ui/core';

const SearchResult = (props) => {
    const [selection, setSelection] = useState([]);

    const history = useHistory();
    const dispatch = useDispatch();

    //retrieve search criteria from redux store
    const currentSearchCriteria = useSelector(state => state.search.word);
    const filteredFoods = useSelector(state => state.foods.filteredFoods);

    const itemChecked = (food) => {        
        let selectionCopy = [...selection];                
        selectionCopy.push(food);    
        setSelection(selectionCopy);
    }

    const itemUnchecked = (food) =>{
        
        let selectionCopy = [...selection];
        let index = selectionCopy.findIndex(item => item === food);
        selectionCopy.splice(index,1);
        setSelection(selectionCopy);
    }

    let foodsDisplay = filteredFoods.map(food => 
        <Food 
            key={food} 
            food={food} 
            itemChecked={itemChecked}
            itemUnchecked={itemUnchecked}
        />)

    const btnSubmitClickHandler = () => {

        if (selection.length < 1){
            alert("Please make a selection first.");
            return;
        }

        const params = {
            foods: selection
        };

        axios.post('/saveselection', params)
        .then(res => {  
            alert("Done");
            history.push("/selected");
            dispatch(clearFiltered());  //clear filtered foods
        })
        .catch(err => {
            alert('Failed');        
        }) 
    }

    return (
        <div>
            <table className="centertable">
                <thead>
                    <tr>                        
                    </tr>
                </thead>
                <tbody>
                    {foodsDisplay}
                </tbody>
            </table>
            { foodsDisplay.length > 0 ? 
                <Button variant="contained" color="primary" onClick={btnSubmitClickHandler}>Submit selection</Button> :
                null
            }
        </div>
    );
}

export default SearchResult;