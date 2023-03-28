import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./state/theme";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    }
})