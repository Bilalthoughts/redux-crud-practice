import { configureStore } from "@reduxjs/toolkit";
import CarSlice from "./cars/CarSlice";

const store = configureStore(
    {
        reducer:{
            car: CarSlice,
        }
    }
);

export default store;