import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import queryString from 'query-string';

class BigMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {objects: ['...Loading'], searchCoordinates: '', url: ''};
  }

  componentWillMount() {
    let url = this.props.match.params.id;
    let parsed = queryString.parse(url);
    let stringyurl = queryString.stringify(url);
    parsed.latitude = parseFloat(parsed.latitude);
    parsed.longitude = parseFloat(parsed.longitude);
    axios({
      url: '/tilePage/getPhotosInRange',
      method: 'post',
      data: parsed
    }).then((results) => {
      this.setState({
        objects: results.data.locations,
        searchCoordinates: results.data.searchCoordinates,
        url: stringyurl
      });
      console.log('This is the result from the getphotosinrange post: ', results);
    }).catch((error) => {
      console.log('This error is in the TilePage under getphotosinrange: ', error);
    });
  }

  render() {
    let url = this.props.match.params.id;
    let parsed = queryString.parse(url);
    let stringyurl = queryString.stringify(url);
    parsed.latitude = parseFloat(parsed.latitude);
    parsed.longitude = parseFloat(parsed.longitude);
    const position = [parsed.latitude, parsed.longitude];
    console.log("This is the position coordinates in BigMap: ", position);
    const objects = this.state.objects || this.props.location.state.objects
    return (
      <div>
        <Map
          style={{height: '100vh'}}
          center={position}
          zoom={10}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/fabbous/cj3gnpyq200112rtiabmb608s/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmFiYm91cyIsImEiOiJjajNnbmlmNmQwMDRlMnFxc3Nwdms0dGV1In0.3IAYFLfwY1Z_eh1OxEognA"
            attribution="<attribution>" />
            {(this.state.objects[0] !== '...Loading') ? objects.map((location, i) => {
              console.log("these are locations from inside the marker map");
              return (
                <div key={i}>
                  <Marker position={[location.coordinates.latitude, location.coordinates.longitude]}>
                    <Popup>
                      <span>{location.name}</span>
                    </Popup>
                  </Marker>
                </div>
              );
            }) : console.log('The objects have not loaded yet')}
        </Map>
      </div>
    );
  }
}

export default BigMap;