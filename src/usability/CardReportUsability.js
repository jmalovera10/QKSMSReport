import "./CardReportUsability.css"
import React, {Component} from 'react';
import {Image} from "react-bootstrap";
import {Card,Col, Row} from 'reactstrap';


// App component - represents the whole app

export default class CardReportUsability extends Component {

    constructor(props) {
        super(props);

    }


    render() {

        return (
            <Col sm="12" md ="6">
                <Card className="contrib-card-report">
                    <h1>{this.props.title}</h1>
                    <Image className="image1" src={this.props.imageUrl1} rounded={true} responsive={true}/>
                    <p>{this.props.analysis}</p>
                    <Image className="image2" src={this.props.imageUrl2} rounded={true} responsive={true}/>
                </Card>
            </Col>
        );

    }

}