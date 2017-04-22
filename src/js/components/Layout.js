import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Article from './Article'

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      souce: "test-article.json"
    };
  }

  render() {
    return (
        <Article source={this.state.souce} />
    );
  }
}