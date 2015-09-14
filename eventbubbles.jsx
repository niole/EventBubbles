Tree = React.createClass({
  componentDidMount() {
    const one = document.getElementById("one");
    const zero = document.getElementById("zero");
    const two = document.getElementById("two");


    one.addEventListener('click', function() {
      event.preventDefault();
      console.log('click '+1);
    });
    zero.addEventListener('click', function() {
      event.preventDefault();
      console.log('click '+0);
    });
    two.addEventListener('click', function() {
      event.preventDefault();
      console.log('click '+2);
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
    event.preventDefault();
    console.log('start');
  }
});
