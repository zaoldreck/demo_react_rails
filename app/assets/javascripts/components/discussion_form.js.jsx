var DiscussionForm = React.createClass({

  getInitialState: function() {
    return  {
      discussion: ''
    };
  },

  _onChange: function(event) {
    this.setState({
      discussion: event.target.value
    });
  },

  _onSubmit: function(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.discussion);

    this.setState({
        discussion: ''
    });
  },

  render: function() {
    return  (
              <form onSubmit={this._onSubmit}>
                  <input type="text"
                      placeholder="Enter message here..."
                      onChange={this._onChange}
                      value={this.state.message} />
                  <button onClick={this._onSubmit}>Comment</button>
              </form>
            );
  }
});
