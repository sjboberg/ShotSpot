import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker
} from 'react-google-maps';
import GoogleStarted from './GoogleStarted.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';


class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
  render() {
    return (
      <div>
        {this.initMap()}
      </div>
    );
  }
}


ReactDOM.render(<Index />, document.getElementById('app'));
