import React, {Component} from 'react';
import CardReport from "./modules/CardReportPerformance";
import {Row} from 'reactstrap';

export default class Performance extends Component {

    render() {
        return (
            <div className="performance">
                <Row>
                    <CardReport title="MainActivity Memory Profiling"
                                imageUrl1="/screenshots/mainActivity.jpeg"
                                useVideoIn1={false}
                                analysis="We first made memory profiling on the application, starting with the MainActivity.
                                 We found that it has strong relationships with UI components, which doubles the memory
                                 consumption when the app is under rotation stress. From the heap dumps it can be seen that
                                 Java objects are created and maintained in memory after several rotation events. For example,
                                 the messages’ RecycleView object is created and maintained over and over again, which means
                                 that this UI component has a strong reference to the MainActivity, which is a bad memory
                                 management practice. As it can be seen from the heap dump, there are as many RecyclerView
                                 instances as rotations made."
                                secondImage={true}
                                imageUrl2="/screenshots/MainActivityMemoryProfiling.png"
                                isGoodPractice={false}
                    />
                    <CardReport title="ComposeActivity Memory Profiling"
                                imageUrl1="/screenshots/ComposeActivity.jpeg"
                                useVideoIn1={false}
                                analysis="Also, when rotating the phone repeatedly in the ComposeActivity, the memory again
                                increases uncontrollably. This happens because of the same strong relations maintained with
                                the activity within the RecyclerView. To address this issue, the RecyclerView may use a weak
                                relation specified by parameter, in order to make updates and selections. The memory behavior
                                app for this experiment is shown in the figure."
                                secondImage={true}
                                imageUrl2="/screenshots/ComposeActivityMemoryProfiling.png"
                                isGoodPractice={false}
                    />

                    <CardReport title="Application Graphic Management"
                                imageUrl1="/screenshots/GraphicManipulationGlide.png"
                                useVideoIn1={false}
                                analysis="On the other hand, the graphics memory curves during interaction with the app,
                                remain constant over time. This is because the application uses the Glide library to manage
                                bitmaps and other graphic resources. For example, in the MainActivity when scrolling down
                                the message RecyclerView, even though there are new images for each message, the memory is
                                reused efficiently as it can be observed in the figure."
                                secondImage={false}
                                isGoodPractice={true}
                    />

                    <CardReport title="Application CPU Use"
                                imageUrl1=""
                                useVideoIn1={true}
                                analysis="When evaluating CPU performance of the app, we found that in the ComposeActivity
                                the resources are consumed in repainting (repainting is indicated in the video by purple
                                frames). Nevertheless, in the MainActivity the repaintings only occur due to UI scrolling
                                or user input, which means that it has optimized CPU usage."
                                secondImage={false}
                                imageUrl2=""
                                isGoodPractice={true}/>
                </Row>
            </div>
        );
    }
}

Performance.propTypes = {};