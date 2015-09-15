Bubbles = React.createClass({
  propTypes: {
    bubbleData: React.PropTypes.arrayOf(React.PropTypes.bool),
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },
  componentDidMount() {
    this.buildBubbles(this.makeData(this.props.bubbleData));
  },
  componentDidUpdate() {
    this.buildBubbles(this.makeData(this.props.bubbleData));
  },
  makeData(data) {
    const xScale = d3.scale.linear()
          .domain([0,data.length])
          .range([0,this.props.width]);

    return _.map(data, (d,i) => {
        return {i: i, cx: xScale(i), color: d ? 'green' : 'pink'};
      });
  },
  render() {
    return React.DOM.svg({
      width: this.props.width,
      height: this.props.height
    });
  },
  buildBubbles(data) {
    //idea: no callback on d3 execution
    //settimeout when buildBubbles called if this.nextData still has data, timeout calls
    //this.buildBubbles(this.makeData(this.nextData.shift()));

    const svgContainer = d3.select(this.getDOMNode());
    let circle = svgContainer.selectAll("circles")
                  .data(data, function(d) {return d.i;})

    circle
      .enter()
      .append("circle")
      .transition().duration(500)
      .attr("cx", function (d) { return d.cx; })
      .attr("cy", function (d) { return "5px"; })
      .attr("r", function (d) { return "15px"; })
      .style("fill", function(d) { return d.color; });

    circle.exit()
        .remove();

  }
});
