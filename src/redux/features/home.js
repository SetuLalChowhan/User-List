import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const allUsers = createAsyncThunk(
  "/allUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://dummyjson.com/users`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const Users = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: [], // Initialize users as an empty array
    default: [],
    user:{},
    error: "",
  },
  reducers: {
    searchBar: (state, action) => {
      const searchValue = action.payload.toLowerCase();

      state.users = state.default.filter((user) => {
        const fullName = user.firstName + " " + user.lastName;

        return fullName.toLowerCase().includes(searchValue);
      });
    },
    sortUsers: (state, action) => {
      if (action.payload == "Sort by name") {
        state.users.sort((a, b) => {
          const nameA =
            a.firstName.toLowerCase() + " " + a.lastName.toLowerCase;
          const nameB =
            b.firstName.toLowerCase() + " " + b.lastName.toLowerCase;
          if (nameA < nameB) {
            return -1;
          }
         
        });
      } else if (action.payload == "Sort by email") {
        state.users.sort((a, b) => {
          const emailA = a.email.toLowerCase();
          const emailB = b.email.toLowerCase();
          if (emailA < emailB) {
            return -1;
          }
          
        });
      } else if (action.payload == "Sort by Company name") {
        state.users.sort((a, b) => {
          const comA = a.company.name.toLowerCase();
          const comB = b.company.name.toLowerCase();
          if (comA < comB) {
            return -1;
          }
          
        });
      } else {
        state.users = state.default;
      }
    },
    singleUser:(state,action)=>{
      const id = action.payload
      state.user = state.users.filter((user)=> user.id===id )

    }
  },
  extraReducers: (builder) => {
    builder.addCase(allUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(allUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload.users;
      state.default = action.payload.users;
      state.error = "";
    });
    builder.addCase(allUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    });
  },
});

export const { searchBar, sortUsers,singleUser } = Users.actions;

export default Users.reducer;
