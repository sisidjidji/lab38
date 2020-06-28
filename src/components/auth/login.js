import React from 'react'

export default class Login extends React.Component{
    handleSubmit=(e)=>{
    e.preventDefault()
}
    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
<lable>Username <input name='username'/></lable>
<lable>Password <input name='username'/></lable>
<button>Login</button>
            </form>
        )
    }
}