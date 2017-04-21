import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
      imagePath: "../../img/Day_0_article_1_@2x.jpg",
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} imagePath={this.state.imagePath} />
        <Footer />
      </div>
    );
  }
}