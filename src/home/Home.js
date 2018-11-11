import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row} from "reactstrap";
import ContributorStats from './modules/ContributorStats';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isCSLoaded: false,
            csLoad: 5,
            contribStats: []
        }
    }

    /**
     * In this method all API calls for this view should be declared
     */
    componentDidMount() {
        fetch("https://api.github.com/repos/moezbhatti/qksms/stats/contributors")
            .then(res => res.json())
            .then((result) => {
                let contribs = result.map((user) => {
                    return {
                        author: user.author,
                        total: user.total
                    };
                });
                contribs.sort((a, b) => (a.total > b.total) ? -1 : ((a.total < b.total) ? 1 : 0));
                this.setState({
                    isCSLoaded: true,
                    contribStats: contribs
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    error: err,
                    isCSLoaded: true
                });
            })
    }

    render() {
        return (
            <Row>
                <ContributorStats contributors={this.state.contribStats} isCSLoaded={this.state.isCSLoaded}/>
            </Row>
        );
    }
}

Home.propTypes = {};