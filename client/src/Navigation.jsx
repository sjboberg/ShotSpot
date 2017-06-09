import React from 'react';
import Index from './index.jsx'
import { Link } from 'react-router-dom'

class Navigation extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className = "NavBar">
        <Link to={'/'}><h3>Home</h3></Link>
        <Link to={'/ImageUpload'}><h3>Upload</h3></Link>
        <Link to={'/SignIn'}><h3>Sign In/Sign Up</h3></Link>
        <Link to={'/Login'}><h3>Login</h3></Link>
      </div>
    )
  }
}

export default Navigation;