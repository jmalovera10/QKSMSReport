import React, {Component} from 'react';
import CardReport from "./modules/CardReportPerformance";
import {Row} from 'reactstrap';

export default class Performance extends Component {

    render() {
        return (
            <div className="performance">
                <Row>
                    <CardReport title="MainActivity Memory Profiling"
                                level={3}
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
                                recommendation="Try using WeakReference for all activity references passed to any helper or
                                UI component. This attacks the strong reference problem directly. Another way to prevent this
                                to happen, is by deleting any existing reference on the onDestroy() method."
                    />
                    <CardReport title="ComposeActivity Memory Profiling"
                                level={3}
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
                                recommendation="Try using WeakReference for all activity references passed to any helper or
                                UI component. This attacks the strong reference problem directly. Another way to prevent this
                                to happen, is by deleting any existing reference on the onDestroy() method."
                    />

                    <CardReport title="Application Graphic Management"
                                level={1}
                                imageUrl1="/screenshots/GraphicManipulationGlide.png"
                                useVideoIn1={false}
                                analysis="On the other hand, the graphics memory curves during interaction with the app,
                                remain constant over time. This is because the application uses the Glide library to manage
                                bitmaps and other graphic resources. For example, in the MainActivity when scrolling down
                                the message RecyclerView, even though there are new images for each message, the memory is
                                reused efficiently as it can be observed in the figure."
                                secondImage={false}
                                isGoodPractice={true}
                                recommendation=""
                    />

                    <CardReport title="Application CPU Use By Repainting"
                                level={2}
                                imageUrl1=""
                                useVideoIn1={true}
                                analysis="When evaluating CPU performance of the app, we found that in the ComposeActivity
                                the resources are consumed in repainting (repainting is indicated in the video by purple
                                frames). Nevertheless, in the MainActivity the repaintings only occur due to UI scrolling
                                or user input, which means that it has optimized CPU usage."
                                secondImage={false}
                                imageUrl2=""
                                isGoodPractice={false}
                                recommendation="Delete every background that is not necessary because it is the main cause
                                for repainting thus CPU consumption."
                    />
                </Row>
            </div>
        );
    }
}

Performance.propTypes = {};