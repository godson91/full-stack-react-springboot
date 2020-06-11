import Axios from "axios"
import {JPA_API_URL} from '../../Constants'


class TodoDataService {
    retreiveAllTodos(name){
        return Axios.get(`${JPA_API_URL}/users/${name}/todos`)
    }
    retreiveTodos(name, id){
        return Axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }
    deleteTodo(name,id){
        return Axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }
    updateTodo(name,id, todo){
        return Axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo)
    }
    createTodo(name, todo){
        return Axios.post(`http://localhost:8080/users/${name}/todos/`, todo)
    }
}

export default new TodoDataService()