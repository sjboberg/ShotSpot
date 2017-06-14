import React from 'react'
import axios from 'axios'

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: '', password: ''}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    let userdata = {};
    userdata.username = this.state.username
    userdata.password = this.state.password
    axios({
      method: "POST",
      url: '/login',
      data: userdata
    }).then((results) => {
      console.log(results, 'from login results')
    }).catch((error) => {
      console.log(error, 'This is from login');
    })
  }

  handleUserName(e){
    this.setState({username: e.target.value})
  }

  handlePassword(e){
    this.setState({password: e.target.value})
  }

  render(){
    return(
      <form method="POST">
        <input ref="username" type="text" placeholder="UserName" onChange={this.handleUserName.bind(this)}></input>
        <input ref="password" type="text" placeholder="Password" onChange={this.handlePassword.bind(this)}></input>
        <input onClick={this.handleSubmit} type="submit"></input>
      </form>

    );
  }
}

export default Login