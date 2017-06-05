import React from 'react';
import axios from 'axios';

class Photographs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photographs: ['no photos yet']};
  }

  render() {
    return (
      <div>
        <h3> Photographs </h3>
        {(this.props.photos) ? this.props.photos.map((photo) => {
          return (
            <div key={photo.uri}>
              <img key={photo.uri} src = {photo.uri} />
            </div>
          );
          
        }) : console.log('There are no photos yet to display for this location.')}
      </div>
    );
  }
}

export default Photographs;