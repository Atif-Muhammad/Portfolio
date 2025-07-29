import { createSlice } from "@reduxjs/toolkit";



export const tickerSlice = createSlice({
    name: 'ticker',
    initialState: {
        value: null
    },
    reducers:{
        showTicker: (state, action)=>{
            state.value = action.payload
        },
        hideTicker: state=> {
            state.value = null
        }
    }
})


export const {showTicker, hideTicker} = tickerSlice.actions;
export default tickerSlice.reducer;