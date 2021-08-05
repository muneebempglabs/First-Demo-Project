import React from 'react';

class BasicCalculationItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            firstValue: '',
            secondValue: '',
            output: ''
        }
    }

    onCalculate = () => {
        const { calculate } = this.props
        const { firstValue, secondValue } = this.state;
        this.setState({ output: calculate(firstValue, secondValue) })
    }
    render() {
        const { sign } = this.props;
        const { firstValue, secondValue, output } = this.state;
        return (
            <div>
                <input value={firstValue} onChange={(e) => {
                    this.setState({ firstValue: e.target.value })
                }} />
                <span>{sign}</span>
                <input value={secondValue} onChange={(e) => {
                    this.setState({ secondValue: e.target.value })
                }} />
                =
                <div>
                    {output}
                </div>
                <button onClick={this.onCalculate}>Calculate</button>
            </div>
        );
    }
}
export default BasicCalculationItem