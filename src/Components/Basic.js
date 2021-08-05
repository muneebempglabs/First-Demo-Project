import { Component } from "react";
import { add, subtract, multiply, divide } from '../Functions';
import BasicCalculationItem from "./BasicCalculationItem";

class Basic extends Component {
    render() {
        return (
            <div>
                <BasicCalculationItem sign={'+'} calculate={add} />
                <BasicCalculationItem sign={'*'} calculate={multiply} />
                <BasicCalculationItem sign={'-'} calculate={subtract} />
                <BasicCalculationItem sign={'%'} calculate={divide} />
            </div>
        );
    }
}

export default Basic;