const store = require("./app/store");
const { cakeActions } = require("./feature/cake/cakeSlice");
const { iceActions } = require("./feature/icecream/iceCreamSlice");
const { fetchUsers } = require("./feature/user/userSlice");

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Update", store.getState());
});

// store.dispatch(cakeActions.addCake(2));
// store.dispatch(cakeActions.addCake(1));

// store.dispatch(cakeActions.addCake(4));

// store.dispatch(iceActions.addIce(1));
// store.dispatch(iceActions.addIce(2));

store.dispatch(fetchUsers());

// unsubscribe();
