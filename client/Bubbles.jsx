Bubbles = React.createClass({
  propTypes: {
    bubbleData: React.PropTypes.object,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },
  componentDidMount() {
    this.data = this.makeData(this.props.bubbleData);
    this.svgContainer = d3.select(this.getDOMNode());

    this.circle = this.svgContainer.selectAll("circles")
                  .data(this.data, function(d) {return "circle-"+d.i;});

    this.circle
      .enter()
      .append("circle");

    this.circle
      .attr("cx", function (d) { return "15px"; })
      .attr("cy", function (d) { return d.cy; })
      .attr("r", function (d) { return (d.i+1)*5; })
      .style("fill", function(d) { return d.color; })
      .attr("cy", function (d) { return d.cy-100; });

    this.circle.exit()
        .remove();
  },
  shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.bubbleData.index > -1) {
        if (nextProps.bubbleData.index > 0) {
          this.data[nextProps.bubbleData.index].color = '#ff0080';
          this.data[nextProps.bubbleData.index-1].color = 'white';
        } else {
          this.data[nextProps.bubbleData.index].color = '#ff0080';
        }
      } else {
        this.data[nextProps.bubbleData.length-1].color = 'white';
      }

    this.circle = this.svgContainer.selectAll("circle")
                  .data(this.data, function(d) {return "circle-"+d.i;});
    this.circle
        .enter()
        .append("circle");

    this.circle
        .select("circle");

    this.circle
      .attr("cy", function (d) { return d.cy; })
      .attr("cx", function (d) { return "15px"; })
      .attr("r", function (d) { return (d.i+1)*5; })
      .transition().duration(1000)
      .style("fill", function(d) { return d.color; })

    this.circle
        .exit()
        .remove();

    return false;
  },
  makeData(data) {
    const xScale = d3.scale.linear()
          .domain([0,data.length])
          .range([this.props.height-10, 0]);

    return _.map(_.range(data.length), i => {
      return {i: i, cy: xScale(i), color: (data.index === i) ? '#ff0080' : 'white'};
    });
  },
  render() {
    return React.DOM.svg({
      width: this.props.width,
      height: this.props.height
    });
  }
});
