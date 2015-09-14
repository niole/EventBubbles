Tree = React.createClass({
  componentDidMount() {
    const one = document.getElementById("one");
    one.addEventListener('click', function() {
      event.preventDefault();
      console.log('click '+1);
    });
    const zero = document.getElementById("zero");
    zero.addEventListener('click', function() {
      event.preventDefault();
      console.log('click '+0);
    });

  },
  render() {
    return (
      <div id="zero" className="node">
        <div id="one" className="node">
          <div onClick={this.startBubble} id="two" className="node">
            click
          </div>
        </div>
      </div>
    );
  },
  startBubbles() {
    event.preventDefault();A
    console.log('start');
  }
});
