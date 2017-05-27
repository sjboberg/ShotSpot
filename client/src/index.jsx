import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker
} from 'react-google-maps';
import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="map">
          <Map google={this.props.google} />
        </div>
        <p> This is the index component change for app.json test #4</p>
      </div>
    );
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyBViLR1RDD5f4OmqbD2UH0QTwyYsjk8ldE'
})(Index);


ReactDOM.render(<Index />, document.getElementById('app'));
