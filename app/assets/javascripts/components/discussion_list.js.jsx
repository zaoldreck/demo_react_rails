var DiscussionComment = React.createClass({
  render: function() {
    var discussion = this.props.discussion;
    return <li>{discussion.message}</li>;
  }
});

var DiscussionList = React.createClass({

  render: function() {
    var DiscussionComments = this.props.discussions.map(function(data,index){
      return <DiscussionComments key={data.ID} discussion={data} />
    });

    return  <ul>{DiscussionComments}</ul>;
  }
});
