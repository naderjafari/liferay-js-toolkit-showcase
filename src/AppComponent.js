import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";

export default class extends React.Component {
  render() {
    return (
      <div>
        <p>
          <div> A Button from the project:</div>
          <Button />
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
