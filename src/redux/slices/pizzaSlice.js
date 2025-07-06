import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params) => {
      const {
        category,
        sortBy,
        order,
        search,
        currentPage,
      } = params;

      const { data } = await axios.get(
          `https://680b4870d5075a76d98a812e.mockapi.io/pizzas?page=${currentPage}&limit=8${category}&sortBy=${sortBy}&order=${order}${search}`
      );
      return data;
    },
)

const initialState = {
  items: [],
  status: 'loading', // loading | success | error
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
     state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchPizzas.pending, (state) => {
          state.status = 'loading';
          state.items = [];
        })
        .addCase(fetchPizzas.fulfilled, (state, action) => {
          state.items = action.payload;
          state.status = 'success';
        })
        .addCase(fetchPizzas.rejected, (state, action) => {
          state.status = 'error';
          state.items = [];
        });
  }
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
