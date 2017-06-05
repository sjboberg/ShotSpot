import React from 'react';
import axios from 'axios';
import Locations from './Locations.jsx';
import MapView from './MapView.jsx';
const position = [51.505, -0.09];




class TilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photos: ['...Loading']};
  }

  componentWillMount() {
    axios({
      url: '/tilePage/getAllDb',
      method: 'get'
    }).then((results) => {
      console.log('This is the result from the tile page: ', results);
      this.setState({photos: results.data});
    }).catch((error) => {
      console.log('This is the error in TilePage: ', error);
    });
  }

  render() {
    return (
      <div className="container" id="tile">
        <MapView/>
        <Locations photos = {this.state.photos} />
       
      </div>
    );
  }
}


export default TilePage;