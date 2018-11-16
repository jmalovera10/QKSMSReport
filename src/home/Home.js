import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row} from "reactstrap";
import ContributorStats from './modules/ContributorStats';
import CardReport from "../CardReport";

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
                <CardReport title="Exceptions are usually avoided on the code but not handled!"
                            imageUrl ="qksmsLogo.png"
                            analysis="The code for loading a multimedia message shows that exceptions are being avoided but not handled.
                            Sometimes, 'try' is used and then directly a finally to end the procedure without using a catch. Other times the catch is used
                             directly to return a specific value without even printing the exception or noting on the code.
                             This makes debugging really difficult.
                             For a lot of cases we enabled the exception printing and found out some improving measures that could be
                             taken after analysing them. The most interesting ones can be found at the usability tab."
                            recommendation = "Enable printing of exceptions will make it easier to find further errors."
                level = {2}
                />
            </Row>
        );
    }
}

Home.propTypes = {};