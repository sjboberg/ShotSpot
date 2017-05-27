import React from 'react';
import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker
} from 'react-google-maps';

class GoogleStarted extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {withGoogleMap(<GoogleMap ref={this.props.onMapLoad} defaultZoom={3} defaultCenter={{ lat: -25.363882, lng: 131.044922 }} onClick={this.props.onMapClick}>
        </GoogleMap>)}
      </div>
    );
  }
}

export default GoogleStarted;