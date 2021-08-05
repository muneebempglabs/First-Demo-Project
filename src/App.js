import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Calculator from './Components/Calculator';
import {add} from './Functions';
import {subtract} from './Functions';
import {multiply} from './Functions';
import {divide} from './Functions';



class App extends Component{
  render(){
  return (
    <div className="App">
      <Calculator yourFunc={add} a={10} b={20}/>
      <Calculator yourFunc={subtract} a={20} b={10}/>
      <Calculator yourFunc={multiply} a={10} b={20}/>
      <Calculator yourFunc={divide} a={20} b={10}/>
    </div>
  );
}
}

export default App;
