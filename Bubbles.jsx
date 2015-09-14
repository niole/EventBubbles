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
    console.log('CDU');
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
    const svgContainer = d3.select(this.getDOMNode());
    let circle = svgContainer.selectAll("circles")
                  .data(data, function(d) {return d.i;})

    circle
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        console.log(d.cx);
      return d.cx; })
      .attr("cy", function (d) { return "5px"; })
      .attr("r", function (d) { return "15px"; })
      .style("fill", function(d) {
        console.log(d.color);
        return d.color;
      });

    circle.exit()
        .remove();

  }
});
