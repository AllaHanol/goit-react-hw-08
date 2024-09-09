import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { name: "" };

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    setFilterValue: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const { setFilterValue } =
  filtersSlice.actions;
export const filtersReducer =
  filtersSlice.reducer;
  export const selectFilterValue = (
    state,
  ) => state.filters.name;

