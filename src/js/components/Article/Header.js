import React from 'react';

export default class Header extends React.Component {

    render() {
        switch (this.props.size) {
            case 1:
                return(<h1>{this.props.text}</h1>);
            case 2:
                return(<h2>{this.props.text}</h2>);
            case 3:
                return(<h3>{this.props.text}</h3>);
            case 4:
                return(<h4>{this.props.text}</h4>);
            case 5:
                return(<h5>{this.props.text}</h5>);
            default:
                return(<h6>{this.props.text}</h6>);
        }
    }

}