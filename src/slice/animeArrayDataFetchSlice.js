import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const animeArrayDataThunk = createAsyncThunk(
  'anime/animeArrayDataThunk', async( id, { rejectWithValue }) => {
    try {
      let res = null;
      if(id) {
          res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
      } else { res = await fetch(`https://api.jikan.moe/v4/anime`) }
      const data = await res.json();
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
  name: 'animeArrayData',
  initialState: {
    animeArrayData: {},
    isLoading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(animeArrayDataThunk.fulfilled, (state, action) => { 
      state.animeArrayData = action.payload; 
      state.isLoading = false; 
      state.error = null; 
    })
    .addCase(animeArrayDataThunk.pending, (state) => {
      state.animeArrayData = null; 
      state.isLoading = true; 
      state.error = null;
    })
    .addCase(animeArrayDataThunk.rejected, (state, action) => { 
      state.animeArrayData = null; 
      state.isLoading = false; 
      state.error = action.payload; 
    })
  },
})

export default animeArrayDataFetchSlice.reducer