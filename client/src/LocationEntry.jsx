import React from 'react';


class LocationEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
	const photo = this.props.photo;
	return (
	  <div>
	        <img src = {photo.uri}/>
	  </div>
	);
  }
}

export default LocationEntry;

