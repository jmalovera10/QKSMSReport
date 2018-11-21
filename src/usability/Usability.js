import React, {Component} from 'react';
import "./Usability.css"
import CardReport from "../CardReport";
import {Row} from 'reactstrap';
import ReportHelp from "../ReportHelp";

// App component - represents the whole app

export default class Usability extends Component {


    render() {

        return (
            <div className="usability">
                <Row>

                    <CardReport title="Sending a picture does not ask for files permissions."
                                imageUrl="/screenshots/blancImage.jpeg"
                                imageUrl2=""   //"/screenshots/ExceptionsRequestPermissions.PNG"
                                analysis="While trying to send a picture we noticed that the picture was appended blanc o the message and when sending it it just disappeared without notifying anything.
                             After enabling exceptions programmatically. We realized it was a security exception that was thrown but the app never realized it.
                             Three errors where detected: 1. The app does not ask for the permission to access files when first installed.
                             2. The app does not ask for the permission when clicking 'Adjuntar una foto' but only on 'Tomar una foto'.
                             3. When the exception is launched instead of ignoring it the app should prompt the user for the permissions needed.
                             "
                                fixImageUrl="/screenshots/simplefixMediaFileRequest.PNG"

                                recommendation="We recommend adding these permissions requests at these 3 steps. Or to make it simpler just add it as shown in the picture when requesting to add a picture."
                                level={3}
                    />
                    <CardReport title="It still won't work if it is not the default app for sms."
                                         imageUrl="/screenshots/defaultAppError.PNG"
                                         imageUrl2="/screenshots/defaultMessage.png"
                                         level={3}
                                         fixImageUrl="/screenshots/fixDefaultRequest.PNG"
                                         analysis="After allowing file access through the 'Tomar una foto' functionality, the app still wont send images and won't notify the user WHY.

                                         After trying different things we realized that the app won't send images if it is not the default sms app!
                                         Apparently for some users no message will be sent if it is not made the default app. But in my case is just images, and there is no way for knowing it!
                                         Right now the only way for the user to solve this is to figure it out (how?) and go back to the main activity to set the app as the default app.
                                         It is important to notice that the message shown is not only not noticeable but is also confusing and does not inform the user about why should he make it the default sms app.
                                         Apparently making the app default can also solve the above problem (at least in android 8.0), we recommend solving both in case this changes or doesn't work in other versions.
                                         "
                                recommendation="If this cannot be fixed, we recommend prompting the user to make the app the default app every time he wants to send a picture,
                                         informing him that it won't work otherwise. This can be done as shown in the picture when requesting the gallery and when requesting to take a picture."
                    />
                    <CardReport title="Visually clean and attractive interface."
                                imageUrl="/screenshots/SendMessage.jpeg"
                                imageUrl2="/screenshots/mainActivity.jpeg"
                                level={1}
                                analysis="Aside from these problems, the app presents a visually clean and attractive interface where the primary color for buttons is customizable with a wide range of options.
                                         Almost every functionality can be found easily.
                                         On the contrary, there is no accent color used which makes it difficult to notice important things like the ones just presented and unread messages could be more noticeable..
                                         "
                                recommendation="We recommend using an accent color for notifications about the app and for a small sign for unread messages."
                    />
                    <CardReport
                        title="Menu seems to be redundant and is certainly not attractive."
                        imageUrl="/screenshots/MenuBar.jpeg"
                        level={1}
                        analysis="The menu that can be access seems to show almost the same functionalities and does not attract the user to explore any further.
                        When first seen it seems like the developers used a default template and felts the need to fill this with information.
                        "
                        recommendation="It could be focused to the key functionalities that can't be accessed otherwise and users will really use and could use colors or something to interest the user."
                    />
                </Row>
            </div>
        );

    }

}