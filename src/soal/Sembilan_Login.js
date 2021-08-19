import React, { Component } from 'react'

export default class Sembilan_Login extends Component {
    constructor() {
        super();
        this.state = {
          username: '',
          password:'',
          login: false
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.Login = this.Login.bind(this);
        this.Logout = this.Logout.bind(this);
      }
      handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
       console.log("new value", evt.target.value);
     }
     Login(){

        localStorage.setItem('username', this.state.username); 
        localStorage.setItem('password', this.state.password); 
        this.setState({login:true})
     }
     Logout(){
        localStorage.clear()
        this.setState({login:false})
    }
    render() {
        const {login} = this.state
        return (
            <div>
            { login ? 
                <div>
                    <label> Selamat Datang <b>{this.state.username}</b></label><br/>
                    <button onClick={this.Logout}>Logout</button>
                </div> 
                :  
                <div>
                    <label>Username : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/> </label><br/>
                    <label>Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br/></label>
                    <button onClick={this.Login}>Login</button>
                </div>
            }
              
            </div>
        )
    }
}
