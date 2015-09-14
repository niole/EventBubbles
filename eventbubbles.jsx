Tree = React.createClass({
  getInitialState() {
    return {eventBubbles: [false, false, false]};
  },
  componentDidMount() {
    const one = document.getElementById("event-1");
    const zero = document.getElementById("event-0");
    const two = document.getElementById("event-2");


    one.addEventListener('click', function() {
      event.preventDefault();
      this.showEvent(event);
    }.bind(this));
    zero.addEventListener('click', function() {
      event.preventDefault();
      this.showEvent(event);
    }.bind(this));
    two.addEventListener('click', function() {
      event.preventDefault();
      this.showEvent(event);
    }.bind(this));


  },
  render() {
    return (
      <div id="event-0" className="node">
        <div id="event-1" className="node">
          <div id="event-2" className="node">
            click
            {this.showBubbles(this.state.eventBubbles)}
          </div>
        </div>
      </div>
    );
  },
  showBubbles(eventArray) {
    return <Bubbles bubbleData={this.state.eventBubbles}/>;
  },
  showEvent(event) {
    let currId = parseInt(event.currentTarget.id.match(/([0-9])/g)[0]);
    let newState = _.map(this.state.eventBubbles, (bubble, index) => {
      if (currId === index) {
        return true;
      }
      return false;
    });
    this.setState({eventBubbles: newState});
  }
});
