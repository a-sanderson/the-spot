import React, { Component } from "react"
import axios from "axios"
const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: {},
            token: ""
            
        }
    }


login = credentials => {
    axios.post("/auth/login", credentials)
    .then(res => {
        const { user, token } = res.data
        this.setState({user: user, token: token})
        console.log(user)
    })
    .catch(err => console.log(err))
}

signup = credentials => {
    axios.post("https://skate-hub-server.herokuapp.com/auth/signup", credentials)
    .then(res => {
        const { user, token } = res.data
        this.setState({ user, token, cart: user.cart, favorites: user.favorites})
    })
    .catch(err => console.log(err))
}

    render(){
        return(
            <UserContext.Provider
                value={{
                    ...this.state,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout
                    
                    
                }}>
                    {this.props.children}
                </UserContext.Provider>
        )
    }
}


export default UserProvider

export const withUser = C => props => (
<UserContext.Consumer>
    { value => <C {...value} {...props}/> }
</UserContext.Consumer>
)