var DiscussionApp = React.createClass({

  getInitialState: function() {
    return {
        allDiscussions: []
    };
  },

  _addDiscussion: function(discussion) {
    var id = ( +new Date()+Math.floor( Math.random()*999999 ) ).toString(36);

    var newDiscussion = [{
      'ID': id,
      'title': message
    }];

    this.setState({
      allDiscussions: newDiscussion.concat(this.state.allDiscussions)
    });
  },

  render: function() {
    return  (
              <div>
                  <DiscussionForm handleSubmit={this._addComment}  />
                  <DiscussionList discussions={this.state.allDiscussions} />
              </div>
            );
  }
});
