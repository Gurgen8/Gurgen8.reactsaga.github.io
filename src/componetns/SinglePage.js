
import React, { Component } from 'react'
import { withRouter } from 'react-router'

 



function Users (props){
    

    
    return (
        <div>
          <img style={{width:"200px"}} src={props.match.params.avatar+`reqres.in/img/faces/${props.match.params.id}-image.jpg`} alt={props.match.params.first_name} /> 
            <h1 style={{color:"red"}}> email: {props.match.params.email}</h1>
            <h1 style={{color:"green"}}>name:{props.match.params.first_name}</h1>
            <h1 style={{color:"blue"}}>lastname:{props.match.params.last_name}</h1>
            <button onClick={() => props.history.goBack(-1)} style={{background:"green",width:90,height:40,fontSize:16}}>GO back</button>
        </div>
    )

}

export default withRouter(Users)

  


  