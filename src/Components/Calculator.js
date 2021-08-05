import { div } from "prelude-ls";
import React, {Component} from "react";

class Calculator extends Component{
    render(){
        return(
            <div>{this.props.yourFunc(this.props.a, this.props.b)}</div>
        );
    }
}

export default Calculator;