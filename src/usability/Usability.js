import React, {Component} from 'react';
import "./Usability.css"
import CardReport from "../CardReport";
import {Row,Col} from 'reactstrap';

// App component - represents the whole app

export default class Usability extends Component {


    render() {

        return (
            <Row>
                <CardReport title="Sending a picture does not ask for files permissions."
                            imageUrl="/screenshots/ExceptionsRequestPermissions.PNG"
                            analysis="While trying to send a picture we noticed that the picture was appended blanc o the message and when sending it it just disappeared without notifying anything.
                             After enabling exceptions programmatically. We realized it was a security exception that was thrown but the app never realized it.
                             Three errors where detected: 1. The app does not ask for the permission to access files when first installed.
                             2. The app does not ask for the permission when clicking 'Adjuntar una foto' but only on 'Tomar una foto'.
                             3. When the exception is launched instead of ignoring it the app should prompt the user for the permissions needed.
                             We recommend adding these permissions requests at these 3 steps."
                />
            </Row>
                );

                }

                }