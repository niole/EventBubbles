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
          .range([this.props.height, 0]);

    return _.map(data, (d,i) => {
        return {i: i, cy: xScale(i), color: d ? '#ff0080' : 'white'};
      });
  },
  render() {
    return React.DOM.svg({
      width: this.props.width,
      height: this.props.height
    });
  },
  buildBubbles(data) {
    const svgContainer = d3.select(this.getDOMNode());
    let circle = svgContainer.selectAll("circles")
                  .data(data, function(d) {return d.i;});

    circle
      .enter()
      .append("circle")
      .attr("cx", function (d) { return "15px"; })
      .attr("cy", function (d) { return d.cy; })
      .attr("r", function (d) { return (d.i+1)*5; })
      .style("fill", function(d) { return d.color; })
      .attr("opacity", 0)
      .transition().duration(1000)
      .attr("opacity", .9)
      .attr("cy", function (d) { return d.cy-100; });





    circle.exit()
        .remove();

  }
});
