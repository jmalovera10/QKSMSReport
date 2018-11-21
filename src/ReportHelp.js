import React, {Component} from 'react';
import {Card, Progress} from 'reactstrap';
import "./ReportHelp.css";

export default class ReportHelp extends Component {
    render() {
        let styleLow = "success";
        let levelLow = 30;
        let priorityLow = "PRIORITY LOW";

        let styleIntermediate = "warning";
        let levelIntermediate = 60;
        let priorityIntermediate = "PRIORITY INTERMEDIATE";

        let styleHigh = "danger";
        let levelHigh = 100;
        let priorityHigh = "PRIORITY HIGH";

        return (
            <div className="col-12">
                <Card className="contrib-card-report">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h2>Insight Priority</h2>
                            <h3>Priority Low:</h3>
                            <Progress color={styleLow} value={levelLow}>{priorityLow}</Progress>
                            <p>This priority means that the insight is of low priority for the application to change or maintain,
                            so it has a low impact on the core functionality of the app and should be modified last if is a problem.</p>
                            <h3>Priority Intermediate:</h3>
                            <Progress color={styleIntermediate}
                                      value={levelIntermediate}>{priorityIntermediate}</Progress>
                            <p>This priority means that the insight is of moderate priority for the application to change or maintain,
                                so it has a moderate impact on the core functionality of the app and should be modified in second instance
                                if is a problem.</p>
                            <h3>Priority High:</h3>
                            <Progress color={styleHigh} value={levelHigh}>{priorityHigh}</Progress>
                            <p>This priority means that the insight is of low priority for the application to change or maintain,
                                so it has a high impact on the core functionality of the app and should be modified with a high priority
                                if is a problem.</p>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h2>Insight Type</h2>
                            <h3>Good Practice</h3>
                            <span className="badge badge-success">GOOD PRACTICE</span>
                            <br/>
                            <p>This type means that the insight found is classified as a good practice made by the developers
                             to enhance a quality attribute. It is also classified with a priority to indicate how important is
                            for the app to keep in further commits.</p>
                            <h3>Problem</h3>
                            <span className="badge badge-error">PROBLEM</span>
                            <p>This type means that the insight found is classified as a problem that the applications has
                            that affects a quality attribute. The problem is suggested to be changed depending on the priority
                            level indicated.</p>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}