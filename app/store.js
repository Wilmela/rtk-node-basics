const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");
const { cakeReducer } = require("../feature/cake/cakeSlice");
const { iceReducer } = require("../feature/icecream/iceCreamSlice");
const { usersReducer } = require("../feature/user/userSlice");
const reduxLogger = require("redux-logger");

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceReducer,
    users: usersReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

module.exports = store;
