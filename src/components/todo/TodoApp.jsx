import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/todos" component={ListTodosComponent} />
                        <Route path="/welcome/:name" component={WelcomeComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                </Router>
                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        )
    }
}

function ErrorComponent() {
    return <div>An error occurred. Contact Big Daddy Support</div>
}

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { id: 1, description: 'Learn React' },
                { id: 2, description: 'Become an Expert at React' },
                { id: 3, description: 'Visit Costa Rica' }
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>List todos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )

    }
}
class WelcomeComponent extends Component {
    render() {
        return <div>Welcome {this.props.match.params.name} </div>
    }
}

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFAiled: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this) 
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    loginClicked() {
        //godson91,password
        if (this.state.username === 'godson91' && this.state.password === 'password') {
            this.props.history.push(`/welcome/${this.state.username}`)
        }
        else {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFAiled: true })
        }
    }
    handleChange(event) {
        console.log(this.state);
        this.setState(
            {
                //[event.target.value] is variable
                [event.target.name]: event.target.value
            }
        )
    }
    // handlePasswordChange(event){
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value})
    // }
    render() {
        return (
            <div>
                {this.state.hasLoginFAiled && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Successful Login</div>}
               User Name <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
               Password <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

// function ShowinValidCredentials(props){
//     if(props.hasLoginFAiled){
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }
// function ShowLoginSuccessMessage(props){
//     if(props.showSuccessMessage){
//         return <div>Successful Login</div>
//     }
//     return null
// }


export default TodoApp;