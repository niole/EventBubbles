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
  updateState() {
    let ind = Math.ceil(this.state.eventBubbles.length*Math.random());
    this.setState({eventBubbles: _.map(this.state.eventBubbles, (e,i) => {
        if (i === ind-1) {
          return true;
        }
        return false;
      })
    });
  },
  render() {
    return (
      <span>
        <button onClick={this.updateState}>update</button>
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
    this.setState({eventBubbles: newState});
  }
});
