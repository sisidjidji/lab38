import React from 'react'
import {AuthContext} from  '../../contexts/auth'
export default class Login extends React.Component{
    static contextType=AuthContext;

    handleSubmit=(e)=>{
    e.preventDefault();
    const { username, password} = e.target.elements;
    this.context.login(username.value,password.value);
    
}
LogoutSubmit=e=>{
    e.preventDefault();
    this.context.logout()
}
    render()
    
    {
        console.log('auth context',this.context);
        const {user}=this.context;
     
        if (user) {
            return (
              <h1>
                Welcome back, {user.username}!
                <form OnSubmit={this.logout}>
                 <button>Log Out</button>
                </form>
              </h1>
              );
          }
        return (
            <form onSubmit={this.handleSubmit}>
 <input placeholder="Username" name="username"/>
 <input placeholder="Password" type="password" name="password"/>
<button>Login</button>
            </form>
        )
    }
}