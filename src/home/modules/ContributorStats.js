import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, Col, Row} from 'reactstrap';
import {Image} from "react-bootstrap";

export default class ContributorStats extends Component {

    constructor(props) {
        super(props);
        this.state = {
            csLoad: 5
        }
    }

    render() {
        let topContributors = [];
        if (this.props.isCSLoaded) {
            topContributors = this.props.contributors.slice(0, this.state.csLoad);
        }
        return (
            <Col sm="12" md="6">
                <Card body={true} className="contrib-card">
                    <h1>Contributor Statistics</h1>
                    <h4>These are the contributor statistics for QKSMS project</h4>
                    <h2>Top Contributor Commits:</h2>
                    <Row>
                        {
                            topContributors.map((contr) =>
                                <Col sm="4" md="2">
                                    <Image src={contr.author.avatar_url} rounded={true} responsive={true}/>
                                    <h4>{contr.author.login}</h4>
                                    <h5>{contr.total}</h5>
                                </Col>
                            )
                        }
                    </Row>
                </Card>
            </Col>
        );
    }
}

ContributorStats.propTypes = {
    isCSLoaded: PropTypes.bool.isRequired,
    contributors: PropTypes.array.isRequired
};