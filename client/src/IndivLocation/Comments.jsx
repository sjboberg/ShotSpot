import React from 'react';
import axios from 'axios';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {comments: 'Can you see this comment?'};
  }

  render() {
    return (
      <div>
        <h3 className="commentText"> Comment Section: </h3>
        {(this.props.comments) ? this.props.comments.map((comments, i) => {
          return (
            <div key={i}>
              <h3 className="commentText"> Username: {comments.username} </h3>
              <h3 className="commentText"> {comments.content}</h3>
            </div>
          );
        }) : console.log('There are no comments yet for this location')}
      </div>
    );
  }
}

export default Comments;