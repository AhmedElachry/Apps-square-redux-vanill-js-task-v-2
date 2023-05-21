const container = document.createElement("div");
const divOne = document.createElement("div");
const divTwo = document.createElement("div");
const br = document.createElement("br");
const btnOne = document.createElement("button");
const btnTwo = document.createElement("button");

// actions
function expandWidthOne(value) {
  return {
    type: "expandWidthOne",
    payload: value,
  };
}
function expandWidthTwo(value) {
  return {
    type: "expandWidthTwo",
    payload: value,
  };
}
// reducers
const divOneReducer = (state = "49%", action) => {
  switch (action.type) {
    case "expandWidthOne":
      return (state = action.payload);
    default:
      return state;
  }
};
const divTwoReducer = (state = "49%", action) => {
  switch (action.type) {
    case "expandWidthTwo":
      return (state = action.payload);
    default:
      return state;
  }
};
// combineReducers
const rootReducer = Redux.combineReducers({
  divOne: divOneReducer,
  divTwo: divTwoReducer,
});
// createStore
const store = Redux.createStore(rootReducer);

btnOne.addEventListener("click", () => {
  store.dispatch(expandWidthOne("100%"));
});
btnTwo.addEventListener("click", () => {
  store.dispatch(expandWidthTwo("100%"));
});

function createPage() {
  container.classList.add("container");
  divOne.classList.add("child-one");
  divTwo.classList.add("child-two");
  divOne.style.width = store.getState().divOne;
  divTwo.style.width = store.getState().divTwo;
  divOne.innerText = "Div One";
  divTwo.innerText = "Div Two";
  btnOne.innerText = "Expand Div One";
  btnTwo.innerText = "Expand Div Two";
  container.appendChild(divOne);
  container.appendChild(divTwo);
  container.appendChild(br);
  container.appendChild(btnOne);
  container.appendChild(btnTwo);
  document.body.appendChild(container);
}
createPage();

store.subscribe(() => {
  createPage();
});
