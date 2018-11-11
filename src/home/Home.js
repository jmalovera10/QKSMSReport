import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            error : null,
            isCSLoaded : false,
            csLoad: 10,
            contribStats : []
        }
    }

    componentDidMount(){
        fetch("https://api.github.com/repos/moezbhatti/qksms/stats/contributors")
            .then(res=> res.json())
            .then((result)=>{
                let contribs = result.map((user)=>{
                    return{
                        author : user.author,
                        total : user.total
                    };
                });
                this.setState({
                    isCSLoaded : true,
                    contribStats : contribs
                });
            })
            .catch((err)=>{
                console.log(err);
                this.setState({
                   error : err,
                   isCSLoaded : true
                });
            })
    }

    render(){
        return(
            <div>

            </div>
        );
    }
}

Home.propTypes = {

};