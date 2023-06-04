import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const User_URLS = "https://jsonplaceholder.typicode.com/posts";

export const fetchUsersApi =(createAsyncThunk('car/fetchUsers', async()=>{

    const response = await axios.get(User_URLS);
    return response.data
} ));

export const saveUserApi = createAsyncThunk(
    "car/saveUserApi",
    async (payload) => {
      try {
        const response = await axios.post(User_URLS, payload);
       
  
        return response.data;
      } catch (error) {
       
        // Return a rejected action with an error object
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
  



const initialState = {
    carsData: [],
    loading: "idle",

};

const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers:{
        // allcarsLoading: (state)=>{
        //     if(state.loading === "idle"){
        //         state.loading = "pending";
        //     }
        // },
        // allCarsRecieved:(state,{payload})=>{
        //     state.loading = "idle";
        //     state.carsData = payload;

        // }
    },
    extraReducers:(builder)=>{

        builder.addCase(fetchUsersApi.pending,(state)=>{
            state.loading = "pending"
        });
        builder.addCase(fetchUsersApi.fulfilled,(state,action)=>{
            state.loading = "idle"
            state.carsData = action.payload;
        });
        builder.addCase(saveUserApi.pending,(state)=>{
            state.loading = "pending"
        });
        builder.addCase(saveUserApi.fulfilled, (state, action) => {
            state.loading = "idle";
            // Use immutable updates instead of mutating the existing array
            state.carsData = [action.payload, ...state.carsData];
          });
        builder.addCase(saveUserApi.rejected,(state,action)=>{
            state.loading = "idle";
            console.log('nahi hora kia')
        })
    }
});
// export const {allcarsLoading, allCarsRecieved}= carSlice.actions;

export const getLoading = (state)=> state.car.loading;
export const getAllCars = (state)=> state.car.carsData;
export default carSlice.reducer;
