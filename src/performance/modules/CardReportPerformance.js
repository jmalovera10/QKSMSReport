import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image} from "react-bootstrap";
import {Card, Col, Row} from 'reactstrap';
import YouTube from 'react-youtube';

import "./CardReportPerformance.css";

// App component - represents the whole app

export default class CardReportUsability extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <Col sm="12" md="6">
                <Card className="contrib-card-report">
                    <Row>
                        <Col sm="10">
                            <h1>{this.props.title}</h1>
                        </Col>
                        <Col sm="2" className="center-items">
                            {
                                this.props.isGoodPractice?
                                    <span className="glyphicon glyphicon-ok glyphicon-good-practice"></span>
                                    :<span className="glyphicon glyphicon-remove glyphicon-bad-practice"></span>
                            }
                        </Col>
                    </Row>
                    {
                        this.props.useVideoIn1?
                            <YouTube videoId="_rXOZWx-YRE"/>
                            :<Image className="image1" src={this.props.imageUrl1} rounded={true} responsive={true}/>
                    }
                    <p>{this.props.analysis}</p>
                    {
                        this.props.secondImage ?
                            <Image className="image2"
                                   src={this.props.imageUrl2}
                                   rounded={true}
                                   responsive={true}/>
                            : null
                    }
                </Card>
            </Col>
        );

    }

}

CardReportUsability.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl1: PropTypes.string.isRequired,
    useVideoIn1 : PropTypes.bool.isRequired,
    analysis: PropTypes.string.isRequired,
    secondImage: PropTypes.bool.isRequired,
    imageUrl2: PropTypes.string.isRequired,
    isGoodPractice : PropTypes.bool.isRequired
};