import { Component } from "react";
import React from "react";

class Selectors extends React.Component {
  valueofsort = "sort";
  constructor() {
    super();
    this.valueofsort = "sort";
    if(localStorage.getItem("sorting")==null)
    {
      localStorage.setItem("sorting","sort");
    }
    else
    {
      this.valueofsort = localStorage.getItem("sorting");
    }
    this.state = { value:this.valueofsort};
  }
  onChange(e) {
    if(this.state.value=="sort")
    {
      localStorage.setItem("sorting","usort");
      this.setState({
        value:"usort"
      });
    }
    else
    {
      localStorage.setItem("sorting","sort");
      this.setState({
        value:"sort"
      });
    }
    window.location.reload(false);
  }
  render() {
    return (
      <div className="form-group">
        <label htmlFor="select1" ></label>
        <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
          <option value="sort">Low Priority</option>
          <option value="usort">High Priority</option>
        </select>
      </div>
    )
  }
}
export default Selectors;