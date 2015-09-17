Tree = React.createClass({
  getInitialState() {
    return {eventBubbles: { index: -1, length: 3 }};
  },
  componentDidMount() {
    this.timeouts = [];
    const one = document.getElementById("event-1");
    const zero = document.getElementById("event-0");
    const two = document.getElementById("event-2");
    const top = document.getElementById("top-level");

    top.addEventListener('click', function() {
      event.preventDefault();
      this.slow(this.showEvent(false));
    }.bind(this));

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
    console.log('this.state.eventBubbles');
    console.log(this.state.eventBubbles);
    return (
      <span>
        <div id="top-level" className="node">
          <div id="event-2" className="node">
            <div id="event-1" className="node">
              <div id="event-0" className="node">
                click
                {this.showBubbles(this.state.eventBubbles)}
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  },
  showBubbles(eventArray) {
    return <Bubbles
            width={100}
            height={400}
            bubbleData={eventArray}
            />;
  },
  showEvent(event) {
    let currId;
    if (event) {
      currId = parseInt(event.currentTarget.id.match(/([0-9])/g)[0]);
    }
    let newState = { index: isNaN(currId) ? -1 : currId, length: this.state.eventBubbles.length };
    return function() {
      this.timeouts.shift()
      setTimeout(this.timeouts[0], 1000);
      this.setState({eventBubbles: newState});
    }.bind(this);
  }
});
