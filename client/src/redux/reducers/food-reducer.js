import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// import axios from 'axios';

// export const fetchFoods = createAsyncThunk('foods/fetchFoods', async () => {
//   const response = await axios.get('/foods');
//   return response.data;
// });

export const foodSlice = createSlice({
    name: 'foods',
    initialState: {
        foods: ['x','y','z'],
        filteredFoods: []
    },
    reducers: {
        setFoods: (state, action) => {
            state.foods = action.payload;
        },
        filter: (state, action) => {
            //let searchResult = state.foods.filter(item => item.toLowerCase().indexOf(action.payload) > -1);   
            let searchResult = state.foods.filter(item => item.toLowerCase().startsWith(action.payload) === true);   

            state.filteredFoods = searchResult;
        },
        clearFiltered: (state, action) => {
            state.filteredFoods = [];
        }
    },
    // extraReducers: {
    //     [fetchFoods.fulfilled]: (state, action) => {
    //       state.foods = action.payload;
    //     },
    //     [fetchFoods.error]: (state, action) => {
    //       alert("Failed to get Foods");
    //     },
    //   }
});

export const { setFoods, filter, clearFiltered } = foodSlice.actions;
export default foodSlice.reducer;