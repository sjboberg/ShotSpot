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
        <GoogleStarted />
      </div>
    );
  }
}


ReactDOM.render(<Index />, document.getElementById('app'));
