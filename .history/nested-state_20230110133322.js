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
