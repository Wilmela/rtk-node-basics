const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cakeSlice",
  initialState,
  reducers: {
    addCake: (state, action) => {
      state.numberOfCakes += action.payload;
    },
    removeCake: (state) => {
      state.numberOfCakes--;
    },
  },
  
});

module.exports.cakeReducer = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
