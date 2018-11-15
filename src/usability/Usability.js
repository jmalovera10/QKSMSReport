import React, {Component} from 'react';
import "./Usability.css"
import CardReport from "../CardReport";
import {Row} from 'reactstrap';
import CardReportUsability from "./CardReportUsability";

// App component - represents the whole app

export default class Usability extends Component {


    render() {

        return (
            <div className="usability">
                <Row>
                    <CardReportUsability title="Sending a picture does not ask for files permissions."
                                         imageUrl1="/screenshots/blancImage.jpeg"
                                         imageUrl2="/screenshots/ExceptionsRequestPermissions.PNG"
                                         analysis="While trying to send a picture we noticed that the picture was appended blanc o the message and when sending it it just disappeared without notifying anything.
                             After enabling exceptions programmatically. We realized it was a security exception that was thrown but the app never realized it.
                             Three errors where detected: 1. The app does not ask for the permission to access files when first installed.
                             2. The app does not ask for the permission when clicking 'Adjuntar una foto' but only on 'Tomar una foto'.
                             3. When the exception is launched instead of ignoring it the app should prompt the user for the permissions needed.
                             We recommend adding these permissions requests at these 3 steps."
                    />
                    <CardReportUsability title="It still won't work if it is not the default app for sms."
                                         imageUrl1="/screenshots/defaultAppError.PNG"
                                         imageUrl2="/screenshots/defaultMessage.png"
                                         analysis="After allowing file access through the 'Tomar una foto' functionality, te app still wont send images and won't notify the user WHY.
                                         After trying different things we realized that the app won't send images if it is not the default sms app!
                                         If this cannot be fixed, we recommend prompting the user to make the app the default app every time he wants to send a picture,
                                         informing him that it won't work otherwise.
                                         Right now the only way for the user to solve this is to figure it out (how?) and go back to the main activity to set the app as the default app.
                                         It is important to notice that the message shown is not only not noticeable but is also confusing and does not inform the user about why should he make it the default sms app."
                    />
                    <CardReportUsability title="Visually clean and attractive interface."
                                         imageUrl1="/screenshots/SendMessage.jpeg"
                                         imageUrl2="/screenshots/mainActivity.jpeg"
                                         analysis="Aside from these problems, the app presents a visually clean and attractive interface where the primary color for buttons is customizable with a wide range of options.
                                         Almost every functionality can be found easily.
                                         On the contrary, there is no accent color used which makes it difficult to notice important things like the ones just presented and unread messages could be more noticeable..
                                         We recommend using an accent color for notifications about the app and for a small sign for unread messages."
                    />
                    <CardReport
                        title="Menu seems to be redundant and is certainly not attractive."
                        imageUrl="/screenshots/MenuBar.jpeg"
                        analysis="The menu that can be access seems to show almost the same functionalities and does not attract the user to explore any further.
                        When first seen it seems like the developers used a default template and felts the need to fill this with information.
                        It could be focused to the key functionalities that can't be accessed otherwise and users will really use and could use colors or something to interest the user."

                    />
                </Row>
            </div>
        );

    }

}