import React,{useContext} from 'react'
export const AuthContext=React.createContext();
export default function useAuth(){
    return useContext(AuthContext)
}
export class AuthProvider extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <AuthContext.Providder value={this.state}>
             {this.props.children}
            </AuthContext.Providder>
        );
    }
}