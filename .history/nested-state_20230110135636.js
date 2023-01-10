const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  name: "Vishwas",
  address: {
    street: "21 Oremeji St",
    city: "Igando",
    state: "Lagos",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    default: {
      return state;
    }
  }
};

const store = redux.createStore(reducer);

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

store.dispatch(updateStreet("21 Isuti Road"));

unsubscribe();
