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
          <div onClick={this.startBubble} id="event-2" className="node">
            click
          </div>
        </div>
      </div>
    );
  },
  startBubbles() {
    event.preventDefault();
    console.log('start');
  },
  showEvent(event, n) {
    let currId = event.currentTarget.id.match(/([0-9])/g);
    console.log(currId);
  }
});
