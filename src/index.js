import React from "react";
import { render } from "react-dom";
import * as d3 from "d3";

class LoadingSpinner extends React.Component {
  constructor() {
    super();
    this.svgRef = React.createRef();
  }

  updateState() {
    d3.select(this.svgRef.current)
      .select("#loading-spinner-rotator path")
      .attr("transform", "rotate(65)");
  }

  componentDidMount() {
    const svgWidth = 120,
      svgHeight = 85;

    this.updateState();

    const svg = d3
      .select(this.svgRef.current)
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    const arcBase = d3
      .arc()
      .innerRadius(20)
      .outerRadius(35)
      .startAngle(0)
      .endAngle(0.75 * 2 * Math.PI);

    const arcIndicator = d3
      .arc()
      .innerRadius(22)
      .outerRadius(33)
      .startAngle(0)
      .endAngle(0.35 * 2 * Math.PI);

    svg
      .append("g")
      .attr("transform", "translate(50, 50)")
      .append("path")
      .attr("d", arcBase)
      .attr("fill", "#ccc");

    svg
      .append("g")
      .attr("id", "loading-spinner-rotator")
      .attr("transform", "translate(50, 50)")
      .append("path")
      .attr("d", arcIndicator)
      .attr("fill", "#F76560");
  }

  render() {
    return <svg id="loading-spinner" ref={this.svgRef} />;
  }
}

render(<LoadingSpinner visible />, document.getElementById("root"));
