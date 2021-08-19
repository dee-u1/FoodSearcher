import React, { useEffect } from 'react';
import axios from 'axios';
import {useState} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const SelectedFoods = (props) => {
    const classes = useStyles();
    const [foods, setFoods] = useState([]);
    
    useEffect(() => {
      axios.get('/foods/selected')
      .then(res => {
        setFoods(res.data);
      }); // eslint-disable-next-line 
    },[])

    // <div>
    //         {food}
    //     </div>

    let foodsDisplay = foods.map(food => 
        <ListItem>
          <ListItemText primary= {food} />
        </ListItem>
    );

    return (

      <Box 
          display="flex"          
          justifyContent="center"
        >
          <List>
            {foodsDisplay}
          </List>
      </Box>
    )
}

export default SelectedFoods;