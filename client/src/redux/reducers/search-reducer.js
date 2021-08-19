import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        word: ''
    },
    reducers: {
        setSearchCriteria: (state, action) => {
            state.word = action.payload;
        },
        clearSearchCriteria: (state) => {
            state.word = '';
        },
    }
});

export const { setSearchCriteria, clearSearchCriteria } = searchSlice.actions;
export default searchSlice.reducer;