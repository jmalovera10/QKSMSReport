import React, {Component} from 'react';
import {Row} from "react-bootstrap";
import CardReport from "../CardReport";

export default class Others extends Component {
    render() {
        return (
            <Row>
                <CardReport title="Exceptions are usually avoided on the code but not handled!"
                            imageUrl ="qksmsLogo.png"
                            analysis="The code for loading a multimedia message shows that exceptions are being avoided but not handled.
                            Sometimes, 'try' is used and then directly a finally to end the procedure without using a catch. Other times the catch is used
                             directly to return a specific value without even printing the exception or noting on the code.
                             This makes debugging really difficult.
                             For a lot of cases we enabled the exception printing and found out some improving measures that could be
                             taken after analysing them. The most interesting ones can be found at the usability tab."
                            recommendation = "Enable printing of exceptions will make it easier to find further errors."
                            level = {2}
                />

            </Row>
        );
    }
}

