import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image} from "react-bootstrap";
import {Col, Card} from 'reactstrap';

export default class FactModule extends Component {

    render() {
        return (
            <Col sm={"12"} md={this.props.big ? "6" : "3"}>
                <Card className="center-items">
                    <Image src={this.props.imagePath} rounded={true} responsive={true}/>
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

