import React, {Component} from 'react';
import CardReport from "../CardReport";
import {Row} from 'reactstrap';

export default class Performance extends Component {

    render() {
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
                                            or user input, which means that it has optimized CPU usage.</p>
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

                    <CardReport title="MainACtivity CPU Profiling"
                                imageUrl="/screenshots/CPUPerformanceMainActivity.png"
                                imageUrl2="/screenshots/CPUPerformanceMainActivityAfterFix.png"
                                analysis={
                                    <div>
                                        <p>Bearing in mind the overall memory consumption of the application that in normal
                                            conditions keeps stable through time, we tried to analyze the behaviour of CPU
                                        during stress conditions. When rotating the phone repetitively with the fix, we found
                                        a decrease of CPU consumption on the onCreate() period and an average CPU consumption
                                        decrease for the whole test.</p>
                                        <p>
                                            <strong>Testing scenario:</strong> the phone was under rotation stress. The number
                                            of rotations is 20 and is applied on the application before and after background
                                            elimination fix.
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
                                            On a Xperia running android 7.0 we re-initialize the app and directly did 10
                                            turns back and forth of the
                                            screen.
                                            The results after the optimizations are in the next image
                                        </p>
                                    </div>}
                                imageUrl2="/screenshots/memoryPerformance10TurnsbackAndForthWithImprovements.PNG"
                                recommendation="Changing strong relationships for weak relationships. On the OnDestroy set references to null.
                                We did some changes (look at repository) and made some improvement (of 15 MB so about 10%).
                                But the problem is still there, it seems some lazy initializations don't allow weak referencing."
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
                                            <strong>Testing scenario: </strong> application in ComposeActivity under
                                            rotation
                                            stress until 20 rotations.
                                        </p>
                                    </div>
                                }
                                imageUrl2="/screenshots/ComposeActivityMemoryAfterFix.PNG"
                                recommendation="Try using WeakReference for all activity references passed to any helper or
                                UI component. This attacks the strong reference problem directly. Another way to prevent this
                                to happen, is by deleting any existing reference on the onDestroy() method. This fix proved to
                                reduce the memory consumption up to 10MB."
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
                                level={1}
                                recommendation="Keep recycling all bitmap icons used in the applications."
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
                    <CardReport title="Greatly modularize code"
                                imageUrl="/screenshots/"
                                imageUrl2="/screenshots/"
                                fixImageUrl="/screenshots/"
                                analysis="We find that the code is too modularized. For a two to three activities application it seems highly unnecessary the number of classes used.
                                This adds a performance overhead in terms of memory because of the amount of code and of instances created and in terms of performance because it makes it longer to create each element.
                                This might be the primary responsible for the really poor performance of what seems like a simple application.
                                Furthermore, this is usually a maintainability tactic but when taken to this extent it only seems to make it harder to maintain or modify code especially since it is not well documented."
                                level={2}
                                recommendation="Reduce modularity as much as possible. Document code."
                    />
                </Row>
            </div>
        );
    }
}

Performance.propTypes = {};