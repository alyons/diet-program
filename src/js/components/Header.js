import React from "react";

export default class Header extends React.Component {

  render() {
    return (
      <div className="title-image">
        <img src={this.props.imagePath} className="img-responsive" />
        <h1 className="post-content">{this.props.title}</h1>
      </div>
    );
  }
}