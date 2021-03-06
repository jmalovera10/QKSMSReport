import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image} from "react-bootstrap";
import {Col, Card} from 'reactstrap';

export default class FactModule extends Component {

    render() {
        return (
            <Col sm={this.props.big ? "6" : "4"} md={this.props.big ? "2" : "3"}>
                <Card className="center-items fact-card">
                    <Image className="image"  src={this.props.imagePath} rounded={true} responsive={true}/>
                    {this.props.value}
                </Card>
            </Col>
        );
    }
}

FactModule.propTypes = {
    big: PropTypes.bool.isRequired,
    value: PropTypes.object.isRequired,
    imagePath: PropTypes.string.isRequired
};

