import Axios from "axios"

class HelloWorldService {
    executeHelloWorldService(){
        // console.log('executed hello service')
      return  Axios.get('http://localhost:8080/hello')
    }

    executeHelloWorldPathVariableService(name){
        // console.log('executed hello service')
        // let username = "user"
        // let password = 'password'

        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
      return  Axios.get(`http://localhost:8080/hello-path-variable/${name}`
      // ,
      // {
      //   headers: {
      //     authorization: basicAuthHeader
      //   }
      // })
      );
    }
     
}

export default new HelloWorldService()