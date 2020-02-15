import React, { Component } from "react";
import { number, string } from "prop-types";
import classNames from "classnames";

class ReactAnalogNumberInput extends Component {
  constructor(props) {
    super(props);

    const { value } = props;

    this.state = {
      value
    };

    this.change = this.change.bind(this)
  }

  change(add) {
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
    const { max, className } = this.props;
    const numbers = new Array(max + 1).fill(0).map(({}, index) => index);

    return (
      <div
        className={`react-analog-number-input ${className ? className : ""}`}
      >
        <div
          className={classNames("input-nav add", {
            disabled: value === numbers.length - 1
          })}
          onClick={() => this.change(true)}
        >
          <img src="./assets/caret-up.png" alt="Caret Up" />
        </div>
        <div className="input-container">
          <div
            className="swiper"
            style={{
              transform: `translate3d(0, calc(${-33.3 + 33.3 * value}%), 0)`
            }}
          >
            {numbers.reverse().map((num, index) => (
              <span key={index} className="value">
                {num}
              </span>
            ))}
          </div>
        </div>
        <div
          className={classNames("input-nav subtract", {
            disabled: value === 0
          })}
          onClick={() => this.change(false)}
        >
          <img src="./assets/caret-down.png" alt="Caret Down" />
        </div>
      </div>
    );
  }
}

ReactAnalogNumberInput.propTypes = {
  value: number,
  max: number,
  className: string
};

ReactAnalogNumberInput.defaultProps = {
  value: 0,
  max: 20
};

export default ReactAnalogNumberInput;
