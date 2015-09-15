Tree = React.createClass({
  getInitialState() {
    return {eventBubbles: [false, false, false]};
  },
  componentDidMount() {
    this.timeouts = [];
    const one = document.getElementById("event-1");
    const zero = document.getElementById("event-0");
    const two = document.getElementById("event-2");

    one.addEventListener('click', function() {
      event.preventDefault();
      this.slow(this.showEvent(event));
    }.bind(this));
    zero.addEventListener('click', function() {
      event.preventDefault();
      this.slow(this.showEvent(event));
    }.bind(this));
    two.addEventListener('click', function() {
      event.preventDefault();
      this.slow(this.showEvent(event));
    }.bind(this));
  },
  slow(F) {
    if (this.timeouts.length === 0) {
      this.timeouts.push(setTimeout( F, 1000));
    } else {
      this.timeouts.push(F);
    }
  },
  render() {
    return (
      <span>
        <button onClick={this.debounce}>update</button>
        <div id="event-0" className="node">
          <div id="event-1" className="node">
            <div id="event-2" className="node">
              click
              {this.showBubbles(this.state.eventBubbles)}
            </div>
          </div>
        </div>
      </span>
    );
  },
  showBubbles(eventArray) {
    return <Bubbles
            width={400}
            height={100}
            bubbleData={this.state.eventBubbles}
            />;
  },
  showEvent(event) {
    let currId = parseInt(event.currentTarget.id.match(/([0-9])/g)[0]);
    let newState = _.map(this.state.eventBubbles, (bubble, index) => {
      if (currId === index) {
        return true;
      }
      return false;
    });
    return function() {
      this.timeouts.shift()
      setTimeout(this.timeouts[0], 1000);
      this.setState({eventBubbles: newState});
    }.bind(this);
  }
});
