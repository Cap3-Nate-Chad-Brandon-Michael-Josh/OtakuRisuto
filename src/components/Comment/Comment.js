import React, { Component } from "react";

class Comment extends Component {
  render() {
    const { comment, user } = this.props;

    return (
      <section className="comment">
        <p>{user}: {comment}</p>        
      </section>
    );
  }
}

export default Comment;
