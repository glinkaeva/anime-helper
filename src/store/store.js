import { configureStore } from "@reduxjs/toolkit";
import animeArrayDataFetchSlice from "../slice/animeArrayDataFetchSlice";
import currentTitleSlice from "../slice/currentTitleSlice";

const store = configureStore({
    reducer: {
        currentTitle: currentTitleSlice, 
        animeArrayData: animeArrayDataFetchSlice,
    }
})

export default store;