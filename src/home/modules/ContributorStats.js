import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, Col, Row} from 'reactstrap';
import {Image} from "react-bootstrap";
import FactModule from "./FactModule";

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
                <Row>
                <FactModule
                    big={true}
                    value={<p>QKSMS is an open source replacement to the stock messaging app on Android. It is currently
                        available on the <a href="https://play.google.com/store/apps/details?id=com.moez.QKSMS&hl=en">
                            Google Play Store</a> and on
                        <a href="https://f-droid.org/packages/com.moez.QKSMS/">F-Droid</a></p>}
                    imagePath="/qksmsLogo.png"
                />

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
                    <FactModule
                        big={false}
                        value={<h5>Downloads: 10,974K</h5>}
                        imagePath="/screenshots/download.png"
                    />
                </Row>
            </Col>
        );
    }
}

ContributorStats.propTypes = {
    isCSLoaded: PropTypes.bool.isRequired,
    contributors: PropTypes.array.isRequired
};