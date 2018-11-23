import React, {Component} from 'react';
import CardReport from "../CardReport";
import {Row} from 'reactstrap';

import "./Storage.css";

export default class Performance extends Component {

    render() {
        return (
            <div className="storage">
                <Row>
                    <CardReport
                        title="Multimedia Storage"
                        level={2}
                        goodPractice={true}
                        analysis={
                            <p>
                                As a good practice, the application stores the multimedia content on the external
                                storage.
                                This minimizes the app space consumption for the internal storage and almost assures
                                that
                                there will be enough space for large multimedia content.
                            </p>
                        }
                        imageUrl={"/screenshots/ImageStorage.PNG"}
                        recommendation={"Keep all the multimedia content and big files in external storage."}
                    />
                    <CardReport
                        title="Data Storage"
                        level={1}
                        goodPractice={true}
                        analysis={
                            <div>
                                <p>
                                    The app uses the Realm library to manage the data and multimedia storage. This
                                    library
                                    provides a mobile database that runs directly on phones tablets and wearables. This
                                    library has better performance compared to SQLite and is secure, but if the phone is
                                    rooted
                                    all the db content may be expoted with the following command:
                                </p>
                                <code>$ adb root exec-out run-as com.moez.QKSMS cat files/default.realm > PATH_TO_EXPORT</code>
                            </div>
                        }
                        imageUrl={"/screenshots/RealmLibrary.PNG"}
                        recommendation={
                            "For data storage, depending on the type of data, evaluate the use of SharedPreferences, " +
                            "SQLite (or other variants) and external storage. The criteria is data size, privacy and " +
                            "structure."
                        }
                    />
                </Row>
            </div>
        );
    }
}