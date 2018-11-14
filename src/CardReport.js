import "./CardReport.css"
import React, {Component} from 'react';
import {Image} from "react-bootstrap";
import {Card,Col, Row} from 'reactstrap';


// App component - represents the whole app

export default class CardReport extends Component {

    constructor(props) {
        super(props);

    }


    render() {

        return (
            <Col sm="12" md ="6">
                <Card className="contrib-card-report">
                    <h1>{this.props.title}</h1>
                    <Image className="image" src={this.props.imageUrl} rounded={true} responsive={true}/>
                    <p>{this.props.analysis}</p>
                </Card>
            </Col>
        );

    }

}