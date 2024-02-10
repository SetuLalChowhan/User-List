import { configureStore } from "@reduxjs/toolkit";
import Users from "./features/home";
export default configureStore({
  reducer:{
    Users :Users,
  }

})