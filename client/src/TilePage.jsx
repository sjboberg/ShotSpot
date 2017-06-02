import React from 'react';
import axios from 'axios';
import GoogleStarted from './GoogleStarted.jsx';

class TilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photos: ['...Loading']};
  }

  componentWillMount() {
    window.initMap = function() {
      var bakerbeach = {lat: 37.7656, lng: -122.511827};
      var ggb = {lat: 37.807, lng: -122.476};
      var superburgers = {lat: 37.762, lng: -122.434};

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: superburgers
      });
      var marker1 = new google.maps.Marker({
        position: bakerbeach,
        map: map
      });
      var marker2 = new google.maps.Marker({
        position: ggb,
        map: map
      });
      var marker3 = new google.maps.Marker({
        position: superburgers,
        map: map
      });
    };
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
      <div>
        {window.initMap}
        {this.state.photos.map((photo) => {
          return (
            <div key={photo}>
              <img key = {photo} src = {photo}></img>
            </div>
          );
        })} 
      </div>
    );
  }
}

export default TilePage;