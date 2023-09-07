import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API = "http://localhost:3000/api/users";
const GET_DATA = "SEARCH/SearchData/GET_SEARCH_DATA";
const initialState = {
  data: null,
  favourites: localStorage.getItem('favouritePeople') ? JSON.parse(localStorage.getItem('favouritePeople')) : [],
  error: null,
  loading: false,
};

export const getData = createAsyncThunk(GET_DATA, async () => {
  const response = await fetch(API)
    .then((response) => response.json());
  return response;
});

const dataSlice = createSlice({
  name: "User Search Data",
  initialState,
  reducers: {
    addfavouritePeople: (state, action) => {
      const newState = {
        ...state,
        favourites: [
          ...state.favourites,
             action.payload,
        ],
      }
      localStorage.setItem('favouritePeople', JSON.stringify(newState.favourites));
      return newState;
    },
    removefavouritePeople: (state, action) => {
      const newFav = state.favourites.filter((item) => item !== action.payload);
      const newState = {
        ...state,
        favourites: newFav,
      }
      localStorage.setItem('favouritePeople', JSON.stringify(newState.favourites));
      return newState
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getData.fulfilled, (state, action) => ({
        ...state,
        data: action.payload,
        loading: false,
      }))
      .addCase(getData.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
        loading: false,
      }));
  },
});

export const { addfavouritePeople, removefavouritePeople } = dataSlice.actions;
export default dataSlice.reducer;