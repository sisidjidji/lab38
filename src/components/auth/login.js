import React from 'react'

export default class Login extends React.Component{
    handleSubmit=(e)=>{
    e.preventDefault()
    const {username,password}=e.target.elements;
}
    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
<lable>Username <input name='username'/></lable>
<lable>Password <input type='password'/></lable>
<button>Login</button>
            </form>
        )
    }
}