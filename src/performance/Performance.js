import React, {Component} from 'react';
import CardReport from "../CardReport";
import YouTube from "react-youtube";
import {Row} from 'reactstrap';

export default class Performance extends Component {

    render() {

        let opts = {};
        console.log(window.innerWidth);
        if (window.innerWidth > 600) {
            opts = {
                height: '390',
                width: '500',
                playerVars: { // https://developers.google.com/youtube/player_parameters
                    autoplay: 0
                }
            };
        }
        else if (window.innerWidth > 50) {
            opts = {
                height: '390',
                width: window.innerWidth - 50,
                playerVars: { // https://developers.google.com/youtube/player_parameters
                    autoplay: 0
                }
            };
        }

        return (
            <div className="performance">
                <Row>

                    <CardReport title="Application CPU Use By Overdrawing"
                                videoId="_rXOZWx-YRE"
                                analysis={
                                    <div>
                                        <p>When evaluating CPU performance of the app, we found that in the
                                            ComposeActivity
                                            the resources are consumed in repainting (repainting is indicated in the
                                            video by purple
                                            frames). Nevertheless, in the MainActivity the repaintings only occur due to
                                            UI scrolling
                                            or user input, which means that it has optimized CPU usage. The overdraw can
                                            also
                                            appreciated on the video below:
                                        </p>
                                        <YouTube videoId="h87hDnzYsgM" className="video" opts={opts}/>
                                        <p>
                                            <strong>Testing scenario:</strong> the application was navigated on normal
                                            conditions,
                                            using the surface change developer tool.
                                        </p>
                                    </div>
                                }
                                level={2}
                                recommendation="Avoid repainting in ComposeActivity by removing all unnecessary backgrounds."
                                fixImageUrl="/screenshots/RepaintFix.PNG"
                    />

                    <CardReport title="MainActivity CPU Profiling"
                                imageUrl="/screenshots/CPUPerformanceMainActivity.png"
                                imageUrl2="/screenshots/CPUPerformanceMainActivityAfterFix.png"
                                analysis={
                                    <div>
                                        <p>
                                            Bearing in mind the overall memory consumption of the application that in
                                            normal
                                            conditions keeps stable through time, we tried to analyze the behaviour of
                                            CPU
                                            during stress conditions. When rotating the phone repetitively with the fix,
                                            we found
                                            a decrease of CPU consumption on the onCreate() period and an average CPU
                                            consumption
                                            decrease for the whole test. The fix done was the deletion of redundant
                                            backgrounds used in the MainActivity that were detected by the lint.
                                        </p>
                                        <p>
                                            <strong>Testing scenario:</strong> the phone was under rotation stress. The
                                            number
                                            of rotations is 20 and is applied on the application before and after
                                            background
                                            elimination fix.
                                        </p>
                                    </div>
                                }
                                level={2}
                                recommendation="Avoid repainting in ComposeActivity by removing all unnecessary backgrounds."
                                fixImageUrl="/screenshots/RepaintFix.PNG"
                    />

                    <CardReport title="ComposeActivity CPU Profiling"
                                imageUrl="/screenshots/CPUPerformanceComposeActivity.PNG"
                                imageUrl2="/screenshots/CPUPerformanceComposeActivityAfterFix.PNG"
                                analysis={
                                    <div>
                                        <p>
                                            Bearing in mind the overall memory consumption of the application that in
                                            normal
                                            conditions keeps stable through time, we tried to analyze the behaviour of
                                            CPU
                                            during stress conditions. When rotating the phone repetitively with the fix,
                                            we found a decrease of CPU consumption on the onCreate() period and an
                                            average CPU consumption decrease for the whole test. The fix done was the
                                            deletion of redundant backgrounds used in the ComposeActivity that were
                                            detected by the lint.
                                        </p>
                                        <p>
                                            <strong>Testing scenario:</strong> the phone was under rotation stress. The
                                            number of rotations is 20 and is applied on the application before and after
                                            background elimination fix.
                                        </p>
                                    </div>
                                }
                                level={2}
                                recommendation="Avoid repainting in ComposeActivity by removing all unnecessary backgrounds."
                                fixImageUrl="/screenshots/RepaintFix.PNG"
                    />

                    <CardReport title="MainActivity Memory Profiling"
                                imageUrl="/screenshots/memoryPerformance10TurnsbackAndForth.PNG"

                                level={3}
                                analysis={
                                    <div>
                                        <p>We first made memory profiling on the application, starting with the
                                            MainActivity.
                                            We found that it has strong relationships with UI components, which doubles
                                            the memory
                                            consumption when the app is under rotation stress. From the heap dumps it
                                            can be seen that
                                            Java objects are created and maintained in memory after several rotation
                                            events. For example,
                                            the messages’ RecycleView object is created and maintained over and over
                                            again, which means
                                            that this UI component has a strong reference to the MainActivity, which is
                                            a bad memory
                                            management practice. As it can be seen from the heap dump, there are as many
                                            RecyclerView
                                            instances as rotations made.
                                        </p>
                                        <p>
                                            <strong>Testing scenario:</strong>
                                            On a Xperia running android 7.0 we re-initialize the app and directly did 20
                                            turns back and forth of the
                                            screen.
                                            The results after the optimizations are in the next image
                                        </p>
                                    </div>}
                                imageUrl2="/screenshots/memoryPerformance10TurnsbackAndForthWithImprovements.PNG"
                                recommendation="Changing strong relationships for weak relationships. On the OnDestroy set references to null.
                                We did some changes (look at repository) and made some improvement (of 20 MB so about 10%).
                                But the problem is still there, it seems some lazy initializations don't allow weak referencing.
                                Another solution to the problem may be the use of Mosby
                                for the MVI pattern to auto-manage rotation events and prevent memory leaks."
                                fixImageUrl="/screenshots/MainActivityRelationFix.PNG"

                    />
                    <CardReport title="ComposeActivity Memory Profiling"
                                imageUrl="/screenshots/ComposeActivityMemoryBeforeFix.PNG"
                                level={3}

                                analysis={
                                    <div>
                                        <p>Also, when rotating the phone repeatedly in the ComposeActivity, the memory
                                            again
                                            increases uncontrollably. This happens because of the same strong relations
                                            maintained with
                                            the activity within the chips used in the UI. The memory behavior
                                            app for this experiment is shown in the figure.</p>
                                        <p>
                                            <strong>Testing scenario: </strong> On a Xperia running android 7.0 the
                                            application was used in ComposeActivity under rotation stress until 20 rotations.
                                        </p>
                                    </div>
                                }
                                imageUrl2="/screenshots/ComposeActivityMemoryAfterFix.PNG"
                                recommendation="Try using WeakReference for all activity references passed to any helper or
                                UI component. This attacks the strong reference problem directly. Another way to prevent this
                                to happen, is by deleting any existing reference on the onDestroy() method. This fix proved to
                                reduce the memory consumption up to 10MB. Another solution to the problem may be the use of Mosby
                                for the MVI pattern to auto-manage rotation events and prevent memory leaks."
                                fixImageUrl="/screenshots/ComposeActivityRelationFix.PNG"
                    />


                    <CardReport title="Application Graphic Management"
                                goodPractice={true}
                                imageUrl="/screenshots/GraphicManipulationGlide.png"
                                analysis="On the other hand, the graphics memory curves during interaction with the app,
                                remain constant over time. This is because the application uses the Glide library to manage
                                bitmaps and other graphic resources. For example, in the MainActivity when scrolling down
                                the message RecyclerView, even though there are new images for each message, the memory is
                                reused efficiently as it can be observed in the figure.
                                Even though memory management is good, it can always be improved.
                                 We noticed that icons are not being recycled, doing this may improve the memory performance even further."
                                level={3}
                                recommendation="Keep recycling all bitmap icons used in the applications."
                    />

                    <CardReport title="No Unused Imports"
                                analysis={
                                    <div>
                                        <i className="fas fa-file-invoice fa-8x"
                                           onClick={() => window.open("/lintResults.html", "_blank")}></i>
                                        <h2 >Complete lint report <a href="/lintResults.html" target="_blank">here</a></h2>
                                        <p>When using the Android lint tool to search for unused imports, we found that
                                            there
                                            were not any declared import that was not used, which means that it is
                                            already optimized
                                            in that aspect. Nevertheless, when looking at the lint report there are
                                            several other issues
                                            that are not necessarily related to performance. We advise checking the
                                            whole report for more
                                            app insights.
                                        </p>
                                        <p>
                                            <strong>Testing scenario: </strong> application static analysis using lint
                                            tool.
                                        </p>
                                    </div>
                                }
                                level={1}
                                goodPractice={true}
                                recommendation="Keep libraries optimized to avoid further performance problems"
                    />

                    <CardReport title="Micro-Optimizations"
                                imageUrl="/screenshots/microOptsErrors.PNG"
                                imageUrl2="/screenshots/microOptsErrors2.PNG"
                                fixImageUrl="/screenshots/microOptsFix2.PNG"
                                analysis="In our manual static analysis of the code we found no unoptimal usage of structures. Primitive array types appear to be used when possible and no complicated structures where found.
                                However, we did find a lot of iterators which is a performance bad practice in methods that are repeatedly called. We also found one case of objects declared inside a loop which consumes unnecessary memory.
                                Finally we found that some portions of the code used findItem which is known to be a resource eager method and it was not possible changing it without greatly changing the code.   "
                                level={2}
                                recommendation="Avoid using iterators. Check the whole project to find usages. Avoid initializing objects in loops.
                                Avoid using findById as it is energy greedy, at this point the code is made so that this usage is mandatory but repetitive it could be useful to change it.
                                See pull-request for all the places we found this errors."
                    />

                </Row>
            </div>
        );
    }
}

Performance.propTypes = {};