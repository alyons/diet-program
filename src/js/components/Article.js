import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default class Article extends React.Component {
    render() {
        let data = require('../../data/' + this.props.source)

        console.log(data);

        var spans = [];

        for(var i = 0; i < data.body.length; i++) {
            spans.push(<p id={i}>{data.body[i].span}</p>)
        }

        return (
            <div>
                <Header title={data.title} imagePath={"../../img/" + data.image} />
                {spans}
                <Footer />
            </div>
        );
    }
}