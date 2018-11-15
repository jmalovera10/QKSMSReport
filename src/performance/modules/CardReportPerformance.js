import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image} from "react-bootstrap";
import {Card, Col, Row} from 'reactstrap';
import {Glyphicon} from "react-bootstrap";

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
                        <Col sm="11">
                            <h1>{this.props.title}</h1>
                        </Col>
                        <Col sm="1">
                            {
                                this.props.isGoodPractice?
                                    <Glyphicon glyph="ok"/>
                                    :<Glyphicon glyph="remove"/>
                            }
                        </Col>
                    </Row>
                    <Image className="image1" src={this.props.imageUrl1} rounded={true} responsive={true}/>
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
    analysis: PropTypes.string.isRequired,
    secondImage: PropTypes.bool.isRequired,
    imageUrl2: PropTypes.string.isRequired,
    isGoodPractice : PropTypes.bool.isRequired
};