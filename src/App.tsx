// import React from 'react';
// import logo from './logo.svg';
//import './App.css';
import { useState } from 'react';
//import MyApp from './components/hooks-assignment/MyApp';

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const onclickChangeButton = buttonColor === "red"? "blue": "red";
  return (
    <>
      {/* <MyApp/> */}
      <div>
        <button style={{backgroundColor: buttonColor}} onClick={()=> setButtonColor(onclickChangeButton)}>change to {onclickChangeButton}</button>
      </div>
    </>
  );
}

export default App;
