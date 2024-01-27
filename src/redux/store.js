import { configureStore } from "@reduxjs/toolkit";
import airportSlice from "./features/airport/airportSlice";


const store = configureStore({
    reducer: {
        airportSlice: airportSlice,
    },
})

export default store;