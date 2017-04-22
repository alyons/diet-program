import React from 'react';

import Footer from './Footer';
import ContentHeader from './ContentHeader';
import Header from './Article/Header';
import Span from './Article/Span';

export default class Article extends React.Component {
    render() {
        let data = require('../../data/' + this.props.source)

        console.log(data);

        var children = [];

        for(var i = 0; i < data.body.length; i++) {
            var child;

            switch (data.body[i].type) {
                case 'header':
                    child = <Header key={i} size={data.body[i].data.size} text={data.body[i].data.text} />;
                    break;
                case 'span':
                    child = <Span key={i} text={data.body[i].data} />;
                    break;
                default:
                    child = (<p key={i}>{"Unable to parse object " + i + "."}</p>);
                    break;
            }


            children.push(child);
        }

        return (
            <div>
                <ContentHeader title={data.title} imagePath={"../../img/" + data.image} />
                {children}
                <Footer />
            </div>
        );
    }
}