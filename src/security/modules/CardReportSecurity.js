import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image} from "react-bootstrap";
import {Card, Col, Progress} from 'reactstrap';
import YouTube from 'react-youtube';

import "./CardReportSecurity.css";

// App component - represents the whole app

export default class CardReportSecurity extends Component {


    render() {

        let style = "success";
        let level = 30;
        let priority = "priority low";
        switch(this.props.level){
            case 2:
                style = "warning";
                level =60;
                priority = "priority intermediate";
                break;
            case 3:
                style = "danger";
                level =100;
                priority = "priority high";
                break;
            default:
                break;

        }

        return (
            <Col sm="12" md="6">
                <Card className="contrib-card-report">
                    {
                        !this.props.isGoodPractice?<Progress color={style} value={level}>{priority}</Progress>:null
                    }
                    <h1>{this.props.title}</h1>
                    {
                        this.props.useVideoIn1 ?
                            <YouTube videoId="_rXOZWx-YRE"/>
                            : <Image className="image1" src={this.props.imageUrl1} rounded={true} responsive={true}/>
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
                    {
                        !this.props.isGoodPractice?<h2>Recommendation:</h2>:null
                    }
                    <p>{this.props.recommendation}</p>
                </Card>
            </Col>
        );

    }

}

CardReportSecurity.propTypes = {
    title: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    recommendation: PropTypes.string.isRequired,
    imageUrl1: PropTypes.string.isRequired,
    useVideoIn1: PropTypes.bool.isRequired,
    analysis: PropTypes.string.isRequired,
    secondImage: PropTypes.bool.isRequired,
    imageUrl2: PropTypes.string.isRequired,
    isGoodPractice: PropTypes.bool.isRequired
};