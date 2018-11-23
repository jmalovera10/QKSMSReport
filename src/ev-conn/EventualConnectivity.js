import React, {Component} from 'react';
import "./EventualConnectivity.css"
import CardReport from "../CardReport";
import {Col, Row} from 'reactstrap';
import CardScenario from "../CardScenario";

export default class EventualConnectivity extends Component {

    render() {
        return (
            <div className="ev-conn">
                <Row>
                    <CardReport title="Eventual connectivity is halfway handled."
                                imageUrl="/screenshots/notificationEC.PNG"
                                analysis="Eventual connectivity is kind of well handled for sms.
                                When there is no network access sms fail in the sending process generating a notification that is shown to the user and prompts him to retry.
                                When messages are scheduled and there is no network when the message is supposed to be sent, the same notification is launched.
                                The app does not alert the user that any of these fails are because of a network error.
                                As it is done when trying to make a call, that the app realises that airplane mode is on and prompts to turn it off.
                                Furthermore, eventual connectivity is not being handled for mms files.
                                Sending messages is done through a RX subscription,
                                it seems like a new stream is launch when a message needs to be sent and it keeps running until it is sent, with no possibility of being deleted or handling errors.

"                               imageUrl2="/screenshots/retrySending.PNG"
                                recommendation="Changing the message shown to the user prompting him to check his connection.
                                 Try not to recreate the whole activity when clicking the notification.
                                 Maybe you could even check for airplane mode when trying to send a message and prompt the user to disable it.
                                 Use queues for scheduling messages that were not sent.
                                 Implement eventual connectivity for mms."
                                level={2}
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
                        <CardScenario
                            scenario="Sent 4 mms files on airplane mode. Deleted the third. Turn airplane mode off."
                            results="Only the last message past from 'sending...' to sent. But all 4 messages reached the recipient.
                            We realized eventual connectivity is not being correctly handled for mms."
                            imageResults="/screenshots/mmsError.jpeg"
                        />
                    </Col>

                </Row>
            </div>
        );
    }
}

EventualConnectivity.propTypes = {};