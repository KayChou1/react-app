import React, { Component } from 'react';

class Hello extends Component{
    state = {
        formal: true
    };


    swapper = () => {
        console.log(this.state);
        this.setState({
        formal: !this.state.formal
        })

    }

    render(){
        return (
          <>
           {!this.state.formal ?
            <h1>Hi {this.props.userInfo.firstName + ' ' + this.props.userInfo.lastName} from Hello Component!</h1>:
            <h1>Hi {this.props.userInfo.firstName + ' ' + this.props.userInfo.lastName} from Hello Component!</h1>
            }
            <button onClick={this.swapper}><h1>Click Me!</h1></button>
         </>
        )
    }   

}

export default Hello;