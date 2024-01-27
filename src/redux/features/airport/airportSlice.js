import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const baseUrl = 'https://devapi.innotraveltech.com'
const airportSuggestionUrl = `${baseUrl}/tools/airport-autosuggetion-data`


const initialState = {
    airports : [],
    isLoading: null,
    isError: false,
    error: '',
}




// Replace 'YOUR_ACCESS_KEY' with your actual access key
const apiKey = import.meta.env.VITE_API_KEY;
const secretCode = import.meta.env.VITE_SECRET_CODE;


export const getAirPortSuggestion = createAsyncThunk('airportSlice/getAirPortSuggestion', async () => {
    try {
        const response = await axios.get(airportSuggestionUrl, {
            headers: {
                'apikey': apiKey,
                'secretecode': secretCode,
                // Add any other headers if required
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
})

const airportSlice = createSlice({
    name: 'airportSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAirPortSuggestion.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        })
        .addCase(getAirPortSuggestion.fulfilled, (state, action) => {
            state.isLoading = false;
            state.airports = action.payload.data;
        })
        .addCase(getAirPortSuggestion.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        })
    }
});


export default airportSlice.reducer;