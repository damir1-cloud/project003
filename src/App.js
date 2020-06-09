import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
  <div>Hello World. My name is {props.name} and my age is {props.age - 10}</div>
  );
}

export default App;
