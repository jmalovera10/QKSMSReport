import React, {Component} from 'react';
import {Row,Col,Card} from "reactstrap";
import FactModule from "./modules/FactModule";
import {Image} from "react-bootstrap";

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
            <Row>
                <FactModule
                    big={true}
                    value={<p>QKSMS is an open source replacement to the stock messaging app on Android. It is currently
                        available on the <a href="https://play.google.com/store/apps/details?id=com.moez.QKSMS&hl=en">
                            Google Play Store</a> and on
                        <a href="https://f-droid.org/packages/com.moez.QKSMS/">F-Droid</a></p>}
                    imagePath="/qksmsLogo.png"
                />

                <Col sm="12" md="6">
                    <Card body={true} className="contrib-card">
                        <h1>Contributor Statistics</h1>
                        <h4>These are the contributor statistics for QKSMS project</h4>
                        <h2>Top Contributor Commits:</h2>
                        <Row>
                            {
                                topContributors.map((contr) =>
                                    <Col sm="4" md="2">
                                        <Image src={contr.author.avatar_url} rounded={true} responsive={true}/>
                                        <h4>{contr.author.login}</h4>
                                        <h5>{contr.total}</h5>
                                    </Col>
                                )
                            }
                        </Row>
                    </Card>
                </Col>
                <FactModule
                    big={false}
                    value={<h5>Downloads: 10,974K</h5>}
                    imagePath="/screenshots/download.png"
                />
            </Row>

        );
    }
}

Home.propTypes = {};