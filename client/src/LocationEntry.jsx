import React from 'react';
import Masonry from 'react-masonry-component';


class LocationEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const photo = this.props.photo;
    return (
      <div id="columns">
        <figure>

          <img src = {photo.uri}/>
          <figcaption>Baker Beach</figcaption>
        </figure>
      </div>
    );
  }
}

export default LocationEntry;

