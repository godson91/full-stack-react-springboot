import React, { Component } from "react";
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'


class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            message: null
        }
        this.deleteTodoOnClick = this.deleteTodoOnClick.bind(this)
        this.updateTodoOnClick = this.updateTodoOnClick.bind(this)
        this.refreshTodoList = this.refreshTodoList.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
    }

    componentDidMount(){
        this.refreshTodoList();
    }

    refreshTodoList(){
        let username = AuthenticationService.getLoggedinUserName()
        TodoDataService.retreiveAllTodos(username)
        .then(
            response => {
                // console.log(response)
                this.setState({todos: response.data})
            }
        )
    }
    deleteTodoOnClick(id){
        let username = AuthenticationService.getLoggedinUserName()
        TodoDataService.deleteTodo(username,id)
        .then(
            response => { this.setState({
                message : `Delete of todo ${id} Successful`
            })
            this.refreshTodoList()
        }
        )
    }
    updateTodoOnClick(id){
        console.log('update click')
        this.props.history.push(`/todos/${id}`)
       
    }
    addTodoClicked(){
        this.props.history.push('/todos/-1')
       
    }
    render() {
        return (
            <div>
                <h1>List todos</h1>
               {this.state.message && <div className="alert alert-success">{this.state.message}</div>}  
                 <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th>id</th> */}
                                <th>description</th>
                                <th>Target Date </th>
                                <th>Is Completed?</th>
                                <th>Update </th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodoOnClick(todo.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoOnClick(todo.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
        )

    }
}

export default ListTodosComponent