import React, {Component} from 'react';
import {Row} from "react-bootstrap";
import CardReport from "../CardReport";

export default class Others extends Component {
    render() {
        return (
            <Row>
                <CardReport title="Exceptions are usually avoided on the code but not handled!"
                            imageUrl="qksmsLogo.png"
                            analysis="The code for loading a multimedia message shows that exceptions are being avoided but not handled.
                            Sometimes, 'try' is used and then directly a finally to end the procedure without using a catch. Other times the catch is used
                             directly to return a specific value without even printing the exception or noting on the code.
                             This makes debugging really difficult.
                             For a lot of cases we enabled the exception printing and found out some improving measures that could be
                             taken after analysing them. The most interesting ones can be found at the usability tab."
                            recommendation="Enable printing of exceptions will make it easier to find further errors."
                            level={2}
                />

                <CardReport title="App Crash By Border Case"
                            analysis="When executing the android adb monkey analysis with a 10000 event amount and a seed of 666,
                            we found a border case related to a tap of a view that no longer exists. In other words, this
                            error occurred when a list element was deleted and pressed during deletion."
                            recommendation="To avoid this border case, the recommended action is to ignore every user input
                            for the view being deleted, so when the element is pressed on deletion, nothing happens."
                            level={2}
                            imageUrl="/screenshots/MonkeySeed.PNG"
                            videoId="X8SFyOYzet4"
                            fixImageUrl="/screenshots/BorderCaseFix.png"
                />
                <CardReport title="Greatly modularize code"
                            analysis="We find that the code is too modularized. For a two to three activities application it seems highly unnecessary the number of classes used.
                                This adds a performance overhead in terms of memory because of the amount of code and of instances created and in terms of performance because it makes it longer to create each element.
                                This might be the primary responsible for the really poor performance of what seems like a simple application.
                                Furthermore, this is usually a maintainability tactic but when taken to this extent it only seems to make it harder to maintain or modify code especially since it is not well documented."
                            level={2}
                            recommendation="Reduce modularity as much as possible. Document code."
                />

            </Row>
        );
    }
}

