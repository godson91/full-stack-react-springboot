import axios from 'axios'
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'


class AuthenticationService {

    executeBasicAuthenticationService(username,password){
        return axios.get('http://localhost:8080/basicauth', {headers: {authorization: this.createBasicAuthToken(username,password)}})
    }
    executeJWTAuthenticationService(username,password){
        return axios.post('http://localhost:8080/authenticate', {
            username,
            password
        })
    }

    createBasicAuthToken(username, password){
        return this.basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
    }
    registerSuccessfulLogin(username,password){
        // console.log('registerSuccessfulLogin')
        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username,password))
    }
    registerSuccessfulLoginForJwt(username,token){
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createJWTToken(token))

    }
    createJWTToken(token){
        return  'Bearer ' + token
    }

    logout(){
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }
    isUserLoggedin(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if(user === null) return false
        return true
    }

    getLoggedinUserName(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if(user === null) return ''
        return user
    }

    setupAxiosInterceptors(token){

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedin()){
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()