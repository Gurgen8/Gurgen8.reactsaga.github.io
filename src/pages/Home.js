import React, { Component } from 'react';
import {getUsersRequest2 } from "../store/actions/users";
import { connect } from "react-redux";
import {BrowserRouter as Router,Route,Link,Switch, BrowserRouter,useNavigate} from "react-router-dom"
import SinglePage from '../componetns/SinglePage';



class Home extends Component {
 constructor(props){
   super(props)
 }


 
  componentDidMount() {
    this.props.getUsersRequest2(1);
    this.props.getUsersRequest2(2);
  }

  redirectToHome = () => {
    const { history } = this.props;
    if(history) history.push('/home');
   }
 

 
 
  render() {
    const { usersList, usersListStatus } = this.props;
    const { history } = this.props;
console.log(usersList)
    return (
      <Router>
 <Route exact path= "/" render={ ()=>
     <>
     <header>
     <h1 style={{textAlign:"center",color:"blue"}}>PERSONS</h1>
   </header>
   {usersListStatus === 'request' ? (
     <div>loading..</div>
   ) : null}
   <ul>
     {usersList.map((u,i )=> (
       <li style={{listStyle:"none",width:"100%",fontSize:40,boxShadow:"5px 0px 10px black",textAlign:"center",padding:"10px"}} key={i}>
       <Link style={{textDecoration:"none"}} to={`/${u.email}/${u.first_name}/${u.last_name}/${u.id}/${u.avatar}`}>  {u.first_name}  </Link> 
         </li>
     ))}
   </ul>
   <div style={{display:"flex",margin:"20px",padding:"10px"}}>
   <button style={{border:"2px solid gold",width:100,height:40,color:"gold",background:"black",fontSize:20}}   onClick={()=>  this.props.getUsersRequest2(1) }> page 1</button>
  <button style={{border:"2px solid gold",width:100,height:40,color:"gold",background:"black",fontSize:20}} onClick={()=>  this.props.getUsersRequest2(2) }>page 2</button>
   </div>
   </>  

 }  />   
   <Route  path="/:email/:first_name/:last_name/:id/:avatar" component={SinglePage}/>

      </Router>
           
    );
  }
}




const mapStateToProps = (state) => ({
  usersList: state.users.usersList,
  usersListStatus: state.users.usersListStatus,
})

const mapDispatchToProps = {
  getUsersRequest2
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)


export default Container;


