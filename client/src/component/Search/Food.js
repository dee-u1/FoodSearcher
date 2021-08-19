import React, { useEffect, useState }   from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Food = (props) => {
    const [food, setFood] = useState('');
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        if (props.food) {
            setFood(props.food);
        }
    },[props.book]);
    
    const checkedHandler = (e) => {
        if (e.target.checked === true){
            props.itemChecked(food)
        }
        else{
            props.itemUnchecked(food)
        }
    }   

    return(            
        <tr>
            <td>
                <FormControlLabel
                    control={<Checkbox value={food} color="primary" onChange={checkedHandler} />}
                    label={food}
                />
            </td>            
        </tr>
    );
}

export default Food;