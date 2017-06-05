import React from 'react';

class TileThumb extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={() => this.props.locationSelect(this.props.name)}>
        Image: <img src={this.props.photo} />
        ID: {this.props.id}
        Name: {this.props.name}
        Lat: {this.props.latitude}
        Long: {this.props.longitude}
      </div>
    );
  }
}

export default TileThumb;