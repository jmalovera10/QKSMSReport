import React, {Component} from 'react';
import CardReportSecurity from './modules/CardReportSecurity'

export default class Security extends Component {

    render(){
        return(
            <div>
                <CardReportSecurity
                    title="Permission Management"
                    level={1}
                    recommendation=""
                    imageUrl2={"/screenshots/PermissionDeclaration.PNG"}
                    useVideoIn1={false}
                    analysis="The application uses all the permissions declared in the AndroidManifest.xml, so there are no
                    floating permissions to be exploited by an external application. "
                    secondImage={true}
                    imageUrl1={"/screenshots/PermissionUse.PNG"}
                    isGoodPractice={true}
                />

                <CardReportSecurity
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
