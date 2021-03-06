import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Image} from "react-bootstrap";
import {Card, Col, Progress} from 'reactstrap';
import YouTube from "react-youtube";
import "./CardReport.css"

// App component - represents the whole app

export default class CardReport extends Component {

    render() {
        let style = "success";
        let level = 30;
        let priority = "PRIORITY LOW";
        switch (this.props.level) {
            case 2:
                style = "warning";
                level = 60;
                priority = "PRIORITY INTERMEDIATE";
                break;
            case 3:
                style = "danger";
                level = 100;
                priority = "PRIORITY HIGH";
                break;
            default:
                break;

        }
        let opts = {};
        console.log(window.innerWidth);
        if (window.innerWidth > 600) {
            opts = {
                height: '390',
                width: '500',
                playerVars: { // https://developers.google.com/youtube/player_parameters
                    autoplay: 0
                }
            };
        }
        else if (window.innerWidth > 50) {
            opts = {
                height: '390',
                width: window.innerWidth - 50,
                playerVars: { // https://developers.google.com/youtube/player_parameters
                    autoplay: 0
                }
            };
        }

        return (
            <Col sm="12" md="6">
                <Card className="contrib-card-report">
                    <h1>
                        {
                            this.props.goodPractice?
                                <span className="badge badge-success">
                                    GOOD PRACTICE
                                </span>
                                : <span className="badge badge-error">
                                    PROBLEM
                                </span>
                        }
                    </h1>
                    <Progress color={style} value={level}>{priority}</Progress>
                    <h1>{this.props.title}</h1>
                    {this.props.imageUrl ?
                        <Image className="image" src={this.props.imageUrl} rounded={true} responsive={true}/> :
                        <div></div>}
                    {this.props.analysis}
                    {this.props.imageUrl2 ?
                        <Image className="image2" src={this.props.imageUrl2} rounded={true} responsive={true}/> :
                        <div></div>}

                    {
                        this.props.videoId ?
                            <YouTube videoId={this.props.videoId} className="video" opts={opts}/>
                            : <div></div>
                    }

                    <p><strong>Recommendation: </strong>{this.props.recommendation}</p>
                    {this.props.fixImageUrl ?
                        <div>
                            <strong>Possible fix: </strong>
                            <Image className="imageFix" src={this.props.fixImageUrl} rounded={true} responsive={true}/>
                        </div> : <div></div>
                    }
                </Card>
            </Col>
        );

    }

}

CardReport.propTypes = {
    level: PropTypes.number,
    goodPractice: PropTypes.bool,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    analysis: PropTypes.object,
    imageUrl2: PropTypes.string,
    recommendation: PropTypes.string,
    fixImageUrl: PropTypes.string
};