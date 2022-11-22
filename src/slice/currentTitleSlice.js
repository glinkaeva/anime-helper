import { createSlice } from "@reduxjs/toolkit";

const currentTitleSlice = createSlice({
    name: 'currentTitleSlice',
    initialState: {
        currentTitle: 1,
    },
    reducers: {
        setCurrentTitle(state, action) {
            state.currentTitle = action.payload;
        }
    }
})

export const { setCurrentTitle }  = currentTitleSlice.actions; 
export default currentTitleSlice.reducer;