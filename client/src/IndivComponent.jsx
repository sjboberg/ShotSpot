import React from 'react';
import axios from 'axios';
import Comments from './IndivLocation/Comments.jsx';
import Photographs from './IndivLocation/Photographs.jsx';




class IndivComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {location: 'A location has not been selected yet'};
  }

  componentWillMount() {
    axios({
      url: '/locationPage/getContent',
      method: 'post',
      data: {locationId: this.props.locationID}
    }).then((results) => {
      this.setState({location: results.data});
      console.log('This is the result from the IndivComponent page: ', results);
    }).catch((error) => {
      console.log('This is an error from the IndivComponent page: ', error);
    });
  }

  render() {
    return (
      <div id="columns">
        <Photographs name= {this.state.location.name} photos={this.state.location.photos}/>
        <Comments name={this.state.location.name} comments={this.state.location.comments}/>
      </div>
    );
  }
}

export default IndivComponent;