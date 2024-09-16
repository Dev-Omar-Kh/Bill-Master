import { configureStore } from "@reduxjs/toolkit";
import { darkModeReduce } from "./DarkSlice";

export const Store = configureStore({

    reducer : {

        darkMode : darkModeReduce,

    }

});