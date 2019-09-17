import React, { Component } from 'react'
import Axios from 'axios';


export class UserPage extends Component {
    state={
        congress:[]
    }
    componentDidMount(){
        this.getPeople()
    }
    getPeople = () =>{
        let userId = sessionStorage.getItem("id");
        if(userId){
            Axios.post("/api/getUserCong",{
                userId
            }).then(response=>this.setState({
                congress:response.data
            }))
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default UserPage
