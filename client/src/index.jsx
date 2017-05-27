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

  render() {
    return (
      <div>
        <GoogleStarted containerElement={ <div style={ { height: '100%' }} />} mapElement={ <div style={{ height: '100%' }} /> }
          onMapLoad={_.noop}
          onMapClick={_.noop}
          onMarkerRightClick={_.noop}
        />
      </div>
    );
  }
}


ReactDOM.render(<GoogleStarted />, document.getElementById('app'));
