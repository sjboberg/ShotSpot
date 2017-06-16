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
        {console.log(this.props.allState.sessionUser) == undefined}
        {(this.props.allState.sessionUser !== false) ? <Link to={'/ImageUpload'}> Upload Photo </Link> : console.log('cant see imageupload')}
        {(this.props.allState.sessionUser === false) ? <Link to={'/Signup'}>Sign Up</Link> : console.log('cant see signup')}
        {(this.props.allState.sessionUser === false) ? <Link to={'/Login'}>Sign In</Link> : console.log('cant see login')}
      </div>
    )
  }
}

export default Navigation;