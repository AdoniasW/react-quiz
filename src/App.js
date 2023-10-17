import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
const intialState = {
  questions: [],
  //''loading', 'error', 'active','finished','ready']
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error("Invalid action");
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  // const { questions, status } = state;
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      //.catch((err) => console.log("Error"));
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div>
      <Header />
      <Main className="main">
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;
