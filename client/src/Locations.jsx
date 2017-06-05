import React from 'react';
import LocationEntry from './LocationEntry.jsx';
import $ from 'jquery';
import _ from 'lodash';



class Locations extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.photos);
  }

  render() {
    return (
      <div className="container">
        {this.props.photos.map((photo, i) => {
          return <LocationEntry key={i} photo={photo} />;
        })}
      </div>
    );
  }
}

export default Locations;