import React, {Component} from 'react';
import CardReport from "../CardReport";

export default class Security extends Component {

    render(){
        return(
            <div>
                <CardReport
                    title="Permission Management"
                    level={2}
                    imageUrl={"/screenshots/PermissionUse.PNG"}
                    analysis="The application uses all the permissions declared in the AndroidManifest.xml, so there are no
                    floating permissions to be exploited by an external application.
                    Nevertheless, the app does requests and use some permissions that it is not clear why it needs them or what it does with them.
                    Internet permission is a weird think to ask when the app only sends sms."
                    imageUrl2={"/screenshots/locationPermission.jpeg"}
                    recommendation="Remove Internet and Location permissions or be straightforward to the users to why these permissions
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
