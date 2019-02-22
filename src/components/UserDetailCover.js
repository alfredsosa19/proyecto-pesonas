import React , { Component } from "react";
import "./index.css"

class UserDetailCover extends Component{
    constructor(){
        super();
        this.state={
            cover:"https://cdn.iconscout.com/icon/free/png-256/avatar-375-456327.png"
        }
    }
    render(){
        const {firstName, lastName}=this.props
        return(
            <div className="UserDetailCover" >
                <img 
                    src={this.state.cover} 
                    className="UserDetailCover-img"
                    alt="avatar"
                />
                <h3 className="UserDetailCover-name" >{firstName +" "+ lastName}</h3>  
                
            </div>
        )
    }
}

export default UserDetailCover;