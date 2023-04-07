// import React from 'react';
// import logo from './logo.svg';
//import './App.css';
// import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/Index";
import { increment, decrement } from "./store/counterReducer";
//import MyApp from './components/hooks-assignment/MyApp';

function App() {
  // const [buttonColor, setButtonColor] = useState("red");
  // const onclickChangeButton = buttonColor === "red"? "blue": "red";
  //const [counter, setCounter] = useState(0);

  const count = useSelector((state: RootState)=>state.counter.value);
  const dispatch = useDispatch();

  const incHandler = () => {
    dispatch(increment());
  }

  const decHandler = () => {
    dispatch(decrement());
  }

  const style:any = {
    width: "50px",
    height: "50px",
    backgroundColor: "lightgray",
    textAlign: "center",
    margin: "0 130px",
    fontSize: "35px"
  }

  return (
    <>
      {/* <MyApp/> */}
      <div style={{ margin: "200px 500px" }}>
        {/* <button style={{backgroundColor: buttonColor}} onClick={()=> setButtonColor(onclickChangeButton)}>change to {onclickChangeButton}</button> */}
        <h1 >Counter Application </h1>
        <div style={style}>{count}</div>
        <button onClick={incHandler}>Increment</button>
        <button onClick={decHandler}>decrement</button>
      </div>
    </>
  );
}

export default App;
