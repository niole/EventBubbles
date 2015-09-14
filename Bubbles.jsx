Bubbles = React.createClass({
  propTypes: {
    bubbleData: React.PropTypes.arrayOf(React.PropTypes.bool)
  },
  componentDidMount() {
    this.svgContainer = d3.select(React.findDOMNode(this.refs.eventbubbles)).append("svg")
      .attr("width", 400)
      .attr("height", 100);

    console.log('this.props.bubbleData');
    this.buildBubbles(this.props.bubbleData);
  },
  componentWillUpdate(newProps, newState) {
    this.buildBubbles(newProps.bubbleData);
  },
  render() {
    return (
      <span ref="eventbubbles"/>
    );
  },
  buildBubbles(data) {
    console.log(data);
    console.log(this.svgContainer);
  }
});
