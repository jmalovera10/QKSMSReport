import React, {Component} from 'react';
import "./EventualConnectivity.css"
import CardReport from "./CardReport";
import {Row} from 'reactstrap';

export default class EventualConnectivity extends Component {

    render() {
        return (
            <Row>

                <CardReport title="Error loading image on airplane mode."
                            imageUrl="screenshots/errorLoadingImage.PNG"
                            analysis="Sometimes: On airplane mode, on a conversation, trying to append a picture creates and error (even though no exception is launched) but the picture is not appended and the app reverts to the choose a recipient activity.
Other times, the picture is appended to the message but when clicking send, nothing is sent and the message no longer appears. When the connection is good, the image is sent with no problem. Inspecting the code we notice that the loader function for multimedia objects avoids exceptions but does not handle them.
When catching the exceptions this was te result on a picture that was kept as sending (this time it worked)."
                />

                <CardReport title="Opening message thread."
                            imageUrl="screenshots/errorOnOpeningThread.PNG"
                            analysis="On opening message thread with airplane mode on."
                />
            </Row>
        );
    }
}

EventualConnectivity.propTypes = {};