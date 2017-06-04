import React from 'react';
import axios from 'axios';

class TilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Latitude: this.props.Latitude, Longitude: this.props.Longitude, photos: ['...Loading']};
  }
  componentWillMount() {
    var coordinates = {Latitude: this.state.Latitude, Longitude: this.state.Longitude}
    axios({
      url: '/tilePage/getPhotosInRange',
      method: 'post',
      data: JSON.stringify(coordinates)
    }).then((results) => {
      console.log('This is the result from the getphotosinrange post: ', results);
    }).catch((error) => {
      console.log('This error is in the TilePage under getphotosinrange: ', error);
    })
    axios({
      url: '/tilePage/getAllDb',
      method: 'get'
    }).then((results) => {
      console.log('This is the result from the tile page: ', results);
      this.setState({photos: results.data});
    }).catch((error) => {
      console.log('This is the error in TilePage: ', error);
    });
  }

  render() {
    return (
      <div>
        {this.state.photos.map((photo) => {
          return (
            <div key={photo}>
              <img key = {photo} src = {photo}></img>
            </div>
          );
        })} 
      </div>
    );
  }
}

export default TilePage;