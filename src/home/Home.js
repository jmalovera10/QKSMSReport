import React, {Component} from 'react';
import {Row,Col,Card} from "reactstrap";
import FactModule from "./modules/FactModule";
import {Image} from "react-bootstrap";
import "./Home.css";
import ReportHelp from "../ReportHelp";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isCSLoaded: false,
            csLoad: 5,
            contribStats: []
        }
    }

    /**
     * In this method all API calls for this view should be declared
     */
    componentDidMount() {
        fetch("https://api.github.com/repos/moezbhatti/qksms/stats/contributors")
            .then(res => res.json())
            .then((result) => {
                let contribs = result.map((user) => {
                    return {
                        author: user.author,
                        total: user.total,
                        csLoad: 5
                    };
                });
                contribs.sort((a, b) => (a.total > b.total) ? -1 : ((a.total < b.total) ? 1 : 0));
                this.setState({
                    isCSLoaded: true,
                    contribStats: contribs
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    error: err,
                    isCSLoaded: true
                });
            })
    }

    render() {
        let topContributors = [];
        if (this.state.isCSLoaded) {
            topContributors = this.state.contribStats.slice(0, this.state.csLoad);
        }
        return (
            <Row className="whole-home">
                <FactModule
                    big={true}
                    value={<p>QKSMS is an open source replacement to the stock messaging app on Android. It is currently
                        available on the <a href="https://play.google.com/store/apps/details?id=com.moez.QKSMS&hl=en">
                            Google Play Store</a> and on
                        <a href="https://f-droid.org/packages/com.moez.QKSMS/">F-Droid</a></p>}
                    imagePath="/qksmsLogo.png"
                />
                <FactModule
                    big={false}
                    value={<h5>Downloads: 10,974K</h5>}
                    imagePath="/screenshots/download.png"
                />
                <FactModule
                    big={false}
                    value={
                        <div className="col-12">
                            <h5>4/5</h5>
                            <h5>Rating on play store</h5>
                        </div>
                    }
                    imagePath="/screenshots/PlayStore.PNG"
                />
                <FactModule
                    big={false}
                    value={
                        <div>
                            <i className="fas fa-code fa-5x"></i>
                            <h5>Code</h5>
                            <ul>
                                <li><h5>Java: 56%</h5></li>
                                <li><h5>Kotlin: 44%</h5></li>
                            </ul>
                        </div>
                    }
                    imagePath={""}
                />
                <FactModule
                    big={false}
                    value={
                        <div>
                            <i className="fas fa-exclamation-circle fa-5x"></i>
                            <h5>Issues</h5>
                            <h5>228</h5>
                        </div>
                    }
                    imagePath={""}
                />
                <FactModule
                    big={false}
                    value={
                        <div>
                            <i className="fas fa-history fa-5x"></i>
                            <h5>Commits</h5>
                            <h5>1835</h5>
                        </div>
                    }
                    imagePath={""}
                />
                <Col sm="12" md="12">
                    <Card body={true} className="contrib-card">
                        <h1>Contributor Statistics</h1>
                        <h4>These are the contributor statistics for QKSMS project</h4>
                        <h2>Top Contributor Commits:</h2>
                        <Row>
                            <Col md="1"></Col>
                            {
                                topContributors.map((contr) =>

                                    <Col sm="4" md="2">
                                        <Image className="image" src={contr.author.avatar_url} rounded={true} responsive={true}/>
                                        <h4>{<a href={contr.author.html_url} target="_blank">{contr.author.login}</a>}</h4>
                                        <h5>{contr.total}</h5>
                                    </Col>

                                )
                            }
                            <Col md="1"></Col>
                        </Row>
                    </Card>
                </Col>
                <Col sm="12">
                <ReportHelp/>
                </Col>
            </Row>


        );
    }
}
