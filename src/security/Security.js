import React, {Component} from 'react';
import CardReport from "../CardReport";

export default class Security extends Component {

    render() {
        return (
            <div>

                <CardReport
                    title="Permission Management"
                    level={2}
                    imageUrl={"/screenshots/PermissionUse.PNG"}
                    analysis={
                        <div>
                            <p>
                                The application uses all the permissions declared in the AndroidManifest.xml, so there
                                are no floating permissions to be exploited by an external application. Nevertheless,
                                the app does requests and use some permissions that it is not clear why it needs them or
                                what it does with them. A complete analysis of the 3 permission blocks is done below:
                            </p>
                            <ol>
                                <li>
                                    <p>
                                        <strong>Core Permissions: </strong>every permission in this set is used for SMS
                                        management and are directly related to the core functionality of the
                                        application.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Connection Permissions: </strong>even though BILLING and INTERNET permissions
                                        are not part of the main functionality of the application, these are used for the
                                        user to make donations to the project via internet. This shows that the use of
                                        these permissions are aligned with side features that are not harmful for the user.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Manufacturer Permissions: </strong>the permissions in this set are
                                        related to manufacturer features, more specifically the use of device notifications.
                                        The badge, read and write permissions permit the use of the notification bar and
                                        features of different type of phones by the application.
                                    </p>
                                </li>
                            </ol>
                            <p>
                                Aside from the permissions mentioned earlier, we found other permissions related to
                                user location that are not directly involved with any core or side functionality of
                                the application and are not asked for the user to accept. This is why we consider that
                                is a security risk for the user to leak its position via this application.
                            </p>
                        </div>
                    }
                    imageUrl2={"/screenshots/locationPermission.jpeg"}
                    recommendation="Remove LOCATION permissions or be straightforward to the users to why these permissions
                     are needed."
                />

                <CardReport
                    title="Not Debuggable"
                    goodPractice={true}
                    level={1}
                    recommendation="Maintain this value for production."
                    analysis="Since the application is declared as not debuggable it can't be acceded with the adb debugger
                    to step through the code."
                    imageUrl={"/screenshots/Attacksurface.PNG"}
                />

                <CardReport
                    title="Component External Access"
                    level={1}
                    recommendation="Change the 'exported' attribute to FALSE for the services that are merely called by
                    the application."
                    analysis="Since the app core functionality is SMS service, it must not expose send message services to
                    other applications without any kind of filter or permission. Fortunately, none of these services are exposed
                    for any application to exploit the vulnerability. Nevertheless, there are a series of activities, services and
                    broadcast receivers exposed to the system. In the figure, 1, 2, and 3 are the exported activities, services,
                    and receivers, respectively."
                    imageUrl={"/screenshots/ActivityInfo.png"}
                />
                <h3><a href="/detailedSecurityReport.pdf" target="_blank">Detailed report link</a></h3>
            </div>
        );
    }
}
