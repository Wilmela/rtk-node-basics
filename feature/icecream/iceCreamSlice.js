const { createSlice } = require("@reduxjs/toolkit");
const { cakeActions } = require("../cake/cakeSlice");

const initialState = {
  numberOfIceCream: 10,
};

const iceCreamSlice = createSlice({
  name: "iceCreamSlice",
  initialState,
  reducers: {
    addIce: (state, action) => {
      state.numberOfIceCream += action.payload;
    },
    removeIce: (state) => {
      state.numberOfIceCream--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.addCake, (state) => {
      state.numberOfIceCream--;
    });
  },
});

module.exports.iceReducer = iceCreamSlice.reducer;
module.exports.iceActions = iceCreamSlice.actions;
