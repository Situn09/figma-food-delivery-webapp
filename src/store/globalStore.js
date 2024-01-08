import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice";

// Create global store using reducer
const store = configureStore({
    reducer: counterSlice.reducer
})

export default store