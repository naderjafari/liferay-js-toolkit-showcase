import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import ChartWithState from "./ChartWithState";
import fileJson from "./file.json";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "Make",
          field: "make"
        },
        {
          headerName: "Model",
          field: "model"
        },
        {
          headerName: "Price",
          field: "price"
        }
      ],
      rowData: [
        {
          make: "Toyota",
          model: "Celica",
          price: 35000
        },
        {
          make: "Ford",
          model: "Mondeo",
          price: 32000
        },
        {
          make: "Porsche",
          model: "Boxter",
          price: 72000
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <div
          className="ag-theme-balham"
          style={{
            height: "500px",
            width: "600px"
          }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
          ></AgGridReact>
        </div>

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
