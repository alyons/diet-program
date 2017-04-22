import React from "react";

export default class ContentHeader extends React.Component {

  render() {
    return (
      <div className="title">
        <img src={this.props.imagePath} className="title-image img-responsive" />
        <h1 className="post-content">{this.props.title}</h1>
      </div>
    );
  }
}