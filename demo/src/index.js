import React, { Component } from "react";
import ReactAnalogNumberInput from "react-analog-number-input";

import "../../sass/react-analog-number-input.sass";

class Demo extends Component {
    onChange = (val) => {
        console.log(val);
    }

    render() {
        return (
            <ReactAnalogNumberInput onChange={this.onChange} />
        )
    }
}

export default Demo