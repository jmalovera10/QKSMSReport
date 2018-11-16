import "./CardReport.css"
import React, {Component} from 'react';
import {Image} from "react-bootstrap";
import {Card,Col, Progress} from 'reactstrap';


// App component - represents the whole app

export default class CardReport extends Component {

    constructor(props) {
        super(props);

    }


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
                level =90;
                priority = "priority high";
                break;
            default:
                break;

        }

        return (
            <Col sm="12" md ="6">
                <Card className="contrib-card-report">
                    <Progress color={style} value={level} >{priority}</Progress>
                    <h1>{this.props.title}</h1>
                    <Image className="image" src={this.props.imageUrl} rounded={true} responsive={true}/>
                    <p>{this.props.analysis}</p>
                </Card>
            </Col>
        );

    }

}