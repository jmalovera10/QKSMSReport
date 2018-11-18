import "./CardReport.css"
import React, {Component} from 'react';
import {Image} from "react-bootstrap";
import {Card, Col, Progress} from 'reactstrap';


// App component - represents the whole app

export default class CardScenario extends Component {

    render() {

        return (

            <Card className="contrib-card-report">
                <p><strong>Scenario description:</strong>{this.props.scenario}</p>
                <p><strong>Results: </strong>{this.props.results}</p>
                {this.props.imageResults ?
                    <Image className="image2" src={this.props.imageResults} rounded={true} responsive={true}/> :
                    <div></div>}
            </Card>

        );

    }

}