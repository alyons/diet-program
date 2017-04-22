import React from "react";

export default class Span extends React.Component {

    render() {
        return(
            <span>{this.props.text}</span>
        );
    }
}