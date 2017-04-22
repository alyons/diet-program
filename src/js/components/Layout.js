import React from 'react';

import Article from './Article'

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      souce: "day_1_article.json"
    };
  }

  render() {
    return (
        <Article source={this.state.souce} />
    );
  }
}