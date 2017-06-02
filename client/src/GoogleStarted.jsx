import React from 'react';
import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker
} from 'react-google-maps';

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

class GoogleStarted extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {window.initMap()}
      </div>
    );
  }
}

export default GoogleStarted;