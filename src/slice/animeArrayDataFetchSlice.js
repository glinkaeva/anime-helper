import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const animeArrayDataThunk = createAsyncThunk(
    'animeArrayDataThunk', async( argument, { rejectWithValue }) => {
        try {
            const res = await fetch(`https://api.jikan.moe/v4/anime`)
            const data = await res.json()
            if(data.error) {
                throw new Error(data.error.message)
            }
            return data
        }   
        catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const animeArrayDataFetchSlice = createSlice({
    name: 'fetchSlice',
    initialState: {
        animeArrayData: null,
        isLoading: false,
        error: null
    },
    extraReducers: {
        [animeArrayDataThunk.fulfilled]: (state, action) => { 
            state.animeArrayData = action.payload; 
            state.isLoading = false; 
            state.error = null; 
        },
        [animeArrayDataThunk.pending]: (state) => { 
            state.animeArrayData = null; 
            state.isLoading = true; 
            state.error = null;
        },
        [animeArrayDataThunk.rejected]: (state, action) => { 
            state.animeArrayData = null; 
            state.isLoading = false; 
            state.error = action.payload; 
        },
    }
})

export default animeArrayDataFetchSlice.reducer