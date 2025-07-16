import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { CartItem } from "./cartSlice";
import { Sort } from "./filterSlice";

type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface pizzaSliceState {
  items: Pizza[];
  status: Status;
}

export type SearchPizzaParams = {
  sortBy: string;
  category: string;
  order: string;
  search: string;
  currentPage: number;
};

const initialState: pizzaSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { category, sortBy, order, search, currentPage } = params;

    const { data } = await axios.get<Pizza[]>(
      `https://680b4870d5075a76d98a812e.mockapi.io/pizzas?page=${currentPage}&limit=8${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const selectPizzaData = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
