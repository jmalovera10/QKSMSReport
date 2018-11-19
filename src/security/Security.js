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
                    level={3}
                    recommendation=""
                    imageUrl2={""}
                    useVideoIn1={false}
                    analysis="Since the application is declared as not debuggable it can't be acceded with the adb debugger
                    to step through the code."
                    secondImage={false}
                    imageUrl1={"/screenshots/Attacksurface.PNG"}
                    isGoodPractice={true}
                />
            </div>
        );
    }
}
