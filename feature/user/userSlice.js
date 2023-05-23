const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//Action creator return pending, fulfilled  and rejected conditions;
const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json().then((json) => json.map((user) => user.name))
  );
});

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

module.exports.usersReducer = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
