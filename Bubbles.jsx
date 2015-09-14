Bubbles = React.createClass({
  propTypes: {
    bubbleData: React.PropTypes.arrayOf(React.PropTypes.bool)
  },
  componentDidMount() {
    console.log('this.props.bubbleData');
    console.log(this.props.bubbleData);
    const svgContainer = d3.select(React.findDOMNode(this.refs.eventbubbles)).append("svg")
      .attr("width", 400)
      .attr("height", 100);
  },
  componentWillUpdate(newProps, newState) {
    console.log(newProps.bubbleData);
  },
  render() {
    return (
      <span ref="eventbubbles"/>
    );
  }
});
