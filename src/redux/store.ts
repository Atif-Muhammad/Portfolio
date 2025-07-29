import { configureStore } from "@reduxjs/toolkit";
import tickerReducer from "./ticker/tickerSlice"

export default configureStore({
    reducer: {
        tickerReducer
    }
})