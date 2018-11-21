import React, {Component} from 'react';
import "./EventualConnectivity.css"
import CardReport from "../CardReport";
import {Col, Row} from 'reactstrap';
import CardScenario from "../CardScenario";
import ReportHelp from "../ReportHelp";

export default class EventualConnectivity extends Component {

    render() {
        return (
            <div className="ev-conn">
                <Row>
                    <CardReport title="Eventual connectivity is for the most part well handled."
                                imageUrl="/screenshots/notificationEC.PNG"
                                analysis="Eventual connectivity is actually well handled. When everything needed is enabled, messages that cannot be sent are kept as “sending” and messages that failed in the sending process generate a notification that is shown to the user and prompts him to retry.
When messages are scheduled and there is no network when the message is supposed to be sent, the same notification is launched.
The only missing thing is that the app does not alert the user that any of these fails are because of a network error.
As it is done when trying to make a call, that the app realises that airplane mode is on and prompts to turn it off.
"
                                recommendation="Changing the message shown to the user prompting him to check his connection.
                                 Try not to recreate the whole activity when clicking the notification.
                                 Maybe you could even check for airplane mode when trying to send a message and prompt the user to disable it."
                                level={1}
                                fixImageUrl="/screenshots/notificationImprovement.PNG"
                    />
                    <Col md="6">
                        <h1>Testing Scenarios</h1>
                        <CardScenario
                            scenario="Tested sending an image with airplane mode on, waited for 5 minutes."
                            results="Message 'Enviando...' was kept under the image. After turning airplane mode off the image was sent."
                            imageResults=""
                        />
                        <CardScenario
                            scenario="Tested sending an image with airplane mode on, waited for 10 minutes."
                            results="Message 'Enviando...' was kept under the image. After turning airplane mode off the image was sent."
                            imageResults=""
                        />
                        <CardScenario
                            scenario="Tested sending an image turned airplane mode on just after hitting send."
                            results="Message 'Enviando...' was kept under the image. After turning airplane mode off the image was sent."
                            imageResults=""
                        />
                        <CardScenario
                            scenario="Tested sending an image turned airplane mode on just after hitting send.
                             Turned airplane mode on and then off just as the phone received network access at least 5 times."
                            results="Message 'Enviando...' was kept under the image. After turning airplane mode off completely the image was sent."
                            imageResults=""
                        />
                        <CardScenario
                            scenario="Tested sending an text message with airplane mode on. Then pressed resend with airplane mode off."
                            results="Message failed delivery immediately and a notification was produced.
                            Under the unsent message a notification stated 'No se envió. Pulse para volver a intentarlo.' On press it worked."
                            imageResults="/screenshots/notificationEC.PNG"
                        />
                        <CardScenario
                            scenario="Tested sending an text message with airplane mode on. Then pressed resend with airplane mode on."
                            results="Message failed delivery immediately and a notification was produced. On clicking the message is switch to 'enviando' and then fails back immediately.
                            Notification don't accumulate. But when clicking the notification a flicker appears: the activity is recreated.
                            When clicking the message a new notification appears, when clicking the notification it does not."
                            imageResults=""
                        />
                        <CardScenario
                            scenario="Tested making a call with airplane mode on."
                            results="I was immediately prompted with a message to deactivate airplane mode."
                            imageResults="/screenshots/airplaneModeCall.jpeg"
                        />
                    </Col>

                </Row>
            </div>
        );
    }
}

EventualConnectivity.propTypes = {};