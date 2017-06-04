import React from 'react';
import axios from 'axios';

class TilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {objects: ['...Loading']};
  }
  componentWillMount() {
    var coordinates = {latitude: this.props.latitude, longitude: this.props.longitude};
    axios({
      url: '/tilePage/getPhotosInRange',
      method: 'post',
      data: coordinates
    }).then((results) => {
      this.setState({objects: results.data});
      console.log('This is the result from the getphotosinrange post: ', results);
    }).catch((error) => {
      console.log('This error is in the TilePage under getphotosinrange: ', error);
    });
  }

  render() {
    return (
      <div>
        {(this.state.objects.length > 1) ? this.state.objects.map((object) => {
          return (
            <div key={object.photos[0]}>
              {console.log(object)}
              <img key = {object.photos[0]} src = {object.photos[0]}></img>
            </div>
          );
        }) : console.log('The map has only the ...Loading portion')} 
      </div>
    );
  }
}

export default TilePage;