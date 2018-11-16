import React, {Component} from 'react';
import "./EventualConnectivity.css"
import CardReport from "../CardReport";
import {Row, Col} from 'reactstrap';

export default class EventualConnectivity extends Component {

    render() {
        return (
            <div className="ev-conn">
                <Row>
                    <Col md="3"></Col>
                    <CardReport title="Eventual connectivity is for the most part well handled."
                                imageUrl="/screenshots/notificationEC.PNG"
                                analysis="Eventual connectivity is actually well handled. When everything needed is enabled, messages that cannot be sent are kept as “sending” and messages that failed in the sending process generate a notification that is shown to the user and prompts him to retry.
When messages are scheduled and there is no network when the message is supposed to be sent, the same notification is launched.
The only missing thing is that the app does not alert the user that any of these fails are because of a network error. It could be useful to give him a hint (using a snack bar or changing the notification or the message of message not sent) so that he can check his connection.
As it is done when trying to make a call, that the app realises that airplane mode is on and prompts to turn it off.
"
                                level = {1}
                    />
                    <Col md="3"></Col>

                </Row>
            </div>
        );
    }
}

EventualConnectivity.propTypes = {};