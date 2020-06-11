import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService'

class WelcomeComponent extends Component {

    constructor(props){
        super(props);
        this.retreiveWelcomeMessage = this.retreiveWelcomeMessage.bind(this)
        this.handleSuccesfulResponse = this.handleSuccesfulResponse.bind(this)
        this.state = {
            welcomeMessage: '',
        }
        this.handleError = this.handleError.bind(this)

    }
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <div className="container">
                    Hello {this.props.match.params.name} 
                    , You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to get a customized welcome message.
                    <button onClick={this.retreiveWelcomeMessage}
                     className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container">
                   {this.state.welcomeMessage}
                </div>
            </div>
        )
    }
    // retreiveWelcomeMessage(){
    //     HelloWorldService.executeHelloWorldService()
    //     .then(response => this.handleSuccesfulResponse(response))
    // }

    retreiveWelcomeMessage(){
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response => this.handleSuccesfulResponse(response))
        .catch(response => this.handleError(response))
    }
    
    handleSuccesfulResponse(response){
        this.setState({welcomeMessage: response.data.name})
    }

    handleError(error){
        let errorMessage = '';

        if(error.message)
            errorMessage += error.message
            
        if(error.response && error.response.data) {
            errorMessage += error.response.data.message
        }

        this.setState({welcomeMessage: errorMessage})
    }
}

export default WelcomeComponent