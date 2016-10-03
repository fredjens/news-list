import React from 'react';
import orderBy from 'lodash/orderBy';
import moment from 'moment';

import Home from '.';

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            input: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event) {
        this.setState({ input: event.target.value });
    }

    submit() {
        const url = `http://itchapage.herokuapp.com/itch?url=${this.state.input}`;
        fetch(url)
        .then(res => {
            res.json()
            .then((json) => {
                const article = {
                    title: json.title,
                    intro: json.intro,
                    url: json.source,
                    image: json.image,
                    postedDate: moment().format(),
                };

                const newArray = this.state.articles.slice();
                newArray.push(article);
                this.setState({
                    articles: orderBy(newArray, ['postedDate'], ['desc']),
                    input: '',
                });
            });
        })

        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <Home
                articles={this.state.articles}
                input={this.state.input}
                handleChange={this.handleChange}
                submit={this.submit}
            />
        );
    }
}
