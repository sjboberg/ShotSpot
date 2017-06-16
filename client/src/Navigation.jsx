import React from 'react';
import Index from './index.jsx'
import { Link } from 'react-router-dom'

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount() {
    this.setState({inState: this.props.allState})
  }

  render() {
    return (
      <div className = "NavBar">
        <Link to={'/'}>Home</Link>
        {(this.props.allState.sessionUser) ? <Link to={'/ImageUpload'}>Upload Photo </Link> : console.log('')}
        <Link to={'/Signup'}>Sign Up</Link>
        <Link to={'/Login'}>Sign In</Link>
      </div>
    )
  }
}

export default Navigation;