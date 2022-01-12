const selectDateReducer = (state = " ", action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload + " Corpo";
    case "decrement":
      return state + "Nomad";
    default:
      return state;
  }
};

export default selectDateReducer;
