import React, { Component } from "react";
import { func, number, string, bool, node } from "prop-types";
import classNames from "classnames";

import Nav from "./Nav";

import { Up, Down, Left, Right } from "./vectors";

class ReactAnalogNumberInput extends Component {
  constructor(props) {
    super(props);

    const { value } = props;

    this.state = {
      value
    };
  }

  change = add => {
    const { value } = this.state;
    const newValue = add ? value + 1 : value - 1;

    this.setState({
      value: newValue
    });

    this.props.onChange(newValue);
  };

  componentDidUpdate(prevProps) {
    const { value } = this.props;
    if (prevProps.value !== value) {
      this.setState({
        value
      });
    }
  }

  render() {
    const { value } = this.state;
    const {
      max,
      className,
      horizontal,
      addIcon,
      subtractIcon,
      horizontalAddIcon,
      horizontalSubtractIcon
    } = this.props;

    let numbers = new Array(max + 1).fill(0).map(({}, index) => index);
    numbers = horizontal ? numbers : numbers.reverse();
    const translate = horizontal
      ? `translate3d(${33.3 - 33.3 * value}%, 0, 0)`
      : `translate3d(0, ${-33.3 * (numbers.length - 2 - value)}%, 0)`;

    return (
      <div
        className={classNames(
          `react-analog-number-input ${className ? className : ""}`,
          { horizontal }
        )}
      >
        <Nav
          icon={horizontal ? horizontalSubtractIcon : addIcon}
          change={this.change}
          type={horizontal ? "subtract" : "add"}
          value={value}
          numbers={numbers}
        />
        <div className="input-container">
          <div
            className="swiper"
            style={{
              transform: translate
            }}
          >
            {numbers.map((num, index) => (
              <span key={index} className="value">
                {num}
              </span>
            ))}
          </div>
        </div>
        <Nav
          icon={horizontal ? horizontalAddIcon : subtractIcon}
          change={this.change}
          type={horizontal ? "add" : "subtract"}
          value={value}
          numbers={numbers}
        />
      </div>
    );
  }
}

ReactAnalogNumberInput.propTypes = {
  onChange: func.isRequired,
  value: number,
  max: number,
  className: string,
  horizontal: bool,
  addIcon: node,
  subtractIcon: node,
  horizontalAddIcon: node,
  horizontalSubtractIcon: node
};

ReactAnalogNumberInput.defaultProps = {
  value: 0,
  max: 20,
  horizontal: false,
  addIcon: <Up />,
  subtractIcon: <Down />,
  horizontalAddIcon: <Right />,
  horizontalSubtractIcon: <Left />
};

export default ReactAnalogNumberInput;
