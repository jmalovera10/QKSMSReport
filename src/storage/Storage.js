import React, {Component} from 'react';
import CardReport from "../CardReport";
import {Row} from 'reactstrap';

import "./Storage.css";

export default class Performance extends Component {

    render(){
        return (
            <div className="storage">
                <Row>
                    <CardReport
                        title="Multimedia Storage"
                        level={2}
                        goodPractice={true}
                        analysis={
                            <p>
                                As a good practice, the application stores the multimedia content on the external storage.
                                This minimizes the app space consumption for the internal storage and almost assures that
                                there will be enough space for large multimedia content.
                            </p>
                        }
                        imageUrl={"/screenshots/ImageStorage.PNG"}
                        recommendation={"Keep all the multimedia content and big files in external storage."}
                    />
                    <CardReport
                        title="Data Storage"
                        level={3}
                        goodPractice={true}
                        analysis={
                            <p>
                                The app uses the Realm library to manage the data and multimedia storage. This library
                                provides a mobile database that runs directly on phones tablets and wearables. The
                            </p>
                        }
                        imageUrl={"/screenshots/RealmLibrary.PNG"}
                        recommendation={""}
                    />
                </Row>
            </div>
        );
    }
}