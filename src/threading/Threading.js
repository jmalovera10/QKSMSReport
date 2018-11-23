import React, {Component} from 'react';
import CardReport from "../CardReport";
import {Col, Row} from 'reactstrap';


// App component - represents the whole app

export default class Threading extends Component {


    render() {

        return (
            <Row>
                <Col md="3"></Col>
                <CardReport
                    title="Threading is not being well handled."
                    analysis="
                While running the app, Android Studio tell us constantly that the main thread has too many tasks and is skipping frames.
                Going into the code we see that the app uses RX which is a good way of implementing threading.
                Almost every core functionality is already implemented with RX.
                But we realize that all subscriptions are being made on the main thread.
                "
                    recommendation="Use subscribeOn instead of subscribe and use multi-threading."
                    imageUrl="/screenshots/subscribers.PNG"
                    level={3}
                />
                <Col md="3"></Col>
            </Row>
        );
    }

}