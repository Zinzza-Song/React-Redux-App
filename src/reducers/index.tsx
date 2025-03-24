const counter = (state = 0, action: { type: string }) => {
  switch (action.type) {
    case "INCREAMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counter;
