import React , { Component } from "react";
import "./index.css"
import PropTypes from "prop-types";
import UserPost from "./UserPost";


class UserDetailBody extends Component{
    constructor(props){
        super(props);
        this.state={
            messages:this.props.messages
        }
    }
    render(){
        console.log(this.state.messages);
        let messages = this.state.messages.map((currentValue)=>{
            return(
                <UserPost
                key={currentValue.id}
                id={currentValue.id}
                title={currentValue.title}
                message={currentValue.message}
                />
            );
        });
        
        return(
            <div className="UserDetailBody" >
                {messages}
            </div>
        )
    }
}

UserDetailBody.propTypes = {
    messages: PropTypes.array.isRequired
}

export default UserDetailBody;