import { Component } from "react";
import Calculator from "./Calculator";
import {add} from './Functions';
import {subtract} from './Functions';
import {multiply} from './Functions';
import {divide} from './Functions';


class Basic extends Component{
    constructor(props){ 
        super(props);
        this.state = {
            addition: 0,
            subtraction: 0,
            multiplication: 0,
            division: 0,
            addVal1: '',
            addVal2: '',
            subVal1: '',
            subVal2: '',
            mulVal1: '',
            mulVal2: '',
            divVal1: '',
            divVal2: '',
        }

        this.updateInputVal = this.updateInputVal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      
    }

   updateInputVal(event, stateAttribute){
        this.setState({[stateAttribute]: event.target.value})
    }

    handleSubmit(func){
        this.setState({[addition]: <Calculator yourFunc={func} a={this.state.addVal1} b={this.state.addVal2}/>});
    }

    render(){
        return(
            <div>
                <div>
                    <h1>{this.state.addition}</h1>
                    <input type="number" placeholder = "Enter Number1" onChange={(event)=>this.updateInputVal(event,'addVal1')}/>
                    <input type = "number" placeholder = "Enter Number2" onChange={(event)=>this.updateInputVal(event,'addVal2')}/>
                    <input type="submit" onClick={this.handleSubmit(add)}/>
                </div>
                <div>
                    <h1>{this.state.subtraction}</h1>
                    <input type = "number" placeholder = "Enter Number1"/>
                    <input type = "number" placeholder = "Enter Number2"/>
                </div>
                <div>
                    <h1>{this.state.multiplication}</h1>
                    <input type = "number" placeholder = "Enter Number1"/>
                    <input type = "number" placeholder = "Enter Number2"/>
                </div>
                <div>
                    <h1>{this.state.division}</h1>
                    <input type = "number" placeholder = "Enter Number1"/>
                    <input type = "number" placeholder = "Enter Number2"/>
                </div>
            </div>
        );
    }
}