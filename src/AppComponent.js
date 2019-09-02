import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import ChartWithState from "./ChartWithState";
import fileJson from "./file.json";

export default class extends React.Component {
  render() {
    return (
      <div>
        <p>
          <div> A Button from the project:</div>
          <Button />
        </p>
        <p>
          <div>A Chart from Clay:</div>
          <ChartWithState />
        </p>
        <p>
          <div>A JSON file from the project:</div>
          <pre>{JSON.stringify(fileJson, null, 2)}</pre>
        </p>
        <div>
          <span className="tag">Portlet Namespace:</span>
          <span className="value">{this.props.portletNamespace}</span>
        </div>
        <div>
          <span className="tag">Context Path:</span>
          <span className="value">{this.props.contextPath}</span>
        </div>
        <div>
          <span className="tag">Portlet Element Id:</span>
          <span className="value">{this.props.portletElementId}</span>
        </div>
      </div>
    );
  }
}
