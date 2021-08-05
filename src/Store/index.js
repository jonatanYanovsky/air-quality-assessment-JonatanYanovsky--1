import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cityA: "",
  cityB: ""
};

const citySlice = createSlice({
  name: "cities",
  initialState: initialState,
  reducers: {
    setCityValue(state, action) {
      const city = action.payload.city;
      const value = action.payload.value;

      if (city === "cityA") {
        state.cityA = value;
      } else {
        state.cityB = value;
      }
    }
  }
});

export const cityActions = citySlice.actions;

export default configureStore({
  reducer: { cities: citySlice.reducer }
});
