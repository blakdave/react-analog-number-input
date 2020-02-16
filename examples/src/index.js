import React, { Component } from "react";
import { render } from "react-dom";
import ReactAnalogNumberInput from "../../src";

import "./sass/demo.sass";

class Demo extends Component {
  state = {
    vertical: 0,
    horizontal: 0
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  render() {
    const { vertical, horizontal } = this.state;

    return (
      <div className="example">
        <div className="example-header">
          <span className="title">React Analog Number Input</span>
          <span className="description">
            A react component that displays number inputs as analog.
          </span>
          <span className="side-note">
            Side note: Looks like the lock combination used for baggages. Lol
          </span>
          <span className="author"> - David (Blak Dave) Olubaji</span>
        </div>
        <div className="example-content">
          <div className="input-type">
            <span className="title">Vertical</span>
            <div className="description row">
              <div className="input col-md-5">
                <ReactAnalogNumberInput
                  onChange={val => this.onChange("vertical", val)}
                />
              </div>
              <div className="summary col-md-7">
                <code>
                  {`import ReactAnalogNumberInput from "react-analog-number-input";`}
                  <br />
                  ...
                  <br />
                  ...
                  <br />
                  ...
                  <br />
                </code>
                <code>
                  {`onChange = value => {//use value in function};`}
                  <br />
                  ...
                  <br />
                  ...
                  <br />
                  ...
                  <br />
                </code>
                <code>{`<ReactAnalogNumberInput onChange={this.onChange} />`}</code>
                <h4>Result: {vertical}</h4>
              </div>
            </div>
          </div>
          <div className="input-type">
            <span className="title">Horizontal</span>
            <div className="description row">
              <div className="input col-md-5">
                <ReactAnalogNumberInput
                  onChange={val => this.onChange("horizontal", val)}
                  horizontal
                />
              </div>
              <div className="summary col-md-7">
                <code>
                  {`import ReactAnalogNumberInput from "react-analog-number-input";`}
                  <br />
                  ...
                  <br />
                  ...
                  <br />
                  ...
                  <br />
                </code>
                <code>
                  {`onChange = value => {//use value in function};`}
                  <br />
                  ...
                  <br />
                  ...
                  <br />
                  ...
                  <br />
                </code>
                <code>{`<ReactAnalogNumberInput horizontal />`}</code>
                <h4>Result: {horizontal}</h4>
              </div>
            </div>
          </div>
          <div className="input-type">
            <span className="title">Available Props</span>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>prop</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>onChange</td>
                        <td>This is the function that receives the component's value on your end<br /> <span>Required</span></td>
                        <td>Function</td>
                        <td></td>
                    </tr>
                  <tr>
                    <td>
                      value
                    </td>
                    <td>
                      The default value
                      <br />
                      <span>Optional</span>
                    </td>
                    <td>Number</td>
                    <td>Default is 0</td>
                  </tr>
                  <tr>
                    <td>max</td>
                    <td>
                      Maximum value
                      <br />
                      <span>Optional</span>
                    </td>
                    <td>Number</td>
                    <td>Default is 20</td>
                  </tr>
                  <tr>
                    <td>className</td>
                    <td>
                      Custom css class to help you style the component better
                      <br />
                      <span>Optional</span>
                    </td>
                    <td>String</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>horizontal</td>
                    <td>
                      The layout of the component
                      <br />
                      <span>Optional</span>
                    </td>
                    <td>Boolean</td>
                    <td>Default is false</td>
                  </tr>
                  <tr>
                    <td>addIcon</td>
                    <td>
                      Custom "add" icon for the vertical layout. e.g{" "}
                      {`<img src="your-img-link-here" />`}
                      <br />
                      <span>Optional</span>
                    </td>
                    <td>HTML Element</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>subtractIcon</td>
                    <td>
                      Custom "subtract" icon for the vertical layout. e.g{" "}
                      {`<img src="your-img-link-here" />`}
                      <br />
                      <span>Optional</span>
                    </td>
                    <td>HTML Element</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>horizontalAddIcon</td>
                    <td>
                      Custom "add" icon for the horizontal layout. e.g{" "}
                      {`<img src="your-img-link-here" />`}
                      <br />
                      <span>Optional</span>
                    </td>
                    <td>HTML Element</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>horizontalSubtractIcon</td>
                    <td>
                      Custom "subtract" icon for the horizontal layout. e.g{" "}
                      {`<img src="your-img-link-here" />`}
                      <br />
                      <span>Optional</span>
                    </td>
                    <td>HTML Element</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<Demo />, document.getElementById("root"));
