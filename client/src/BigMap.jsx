import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class BigMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const position = [this.props.location.state.Latitude, this.props.location.state.Longitude];
    return (
      <div>
        <Map
          style={{height: '100vh'}}
          center={position}
          zoom={10}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/fabbous/cj3gnpyq200112rtiabmb608s/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmFiYm91cyIsImEiOiJjajNnbmlmNmQwMDRlMnFxc3Nwdms0dGV1In0.3IAYFLfwY1Z_eh1OxEognA"
            attribution="<attribution>" />
            {this.props.location.state.objects.map((location, i) => {
              return (
                <div key={i}>
                  <Marker position={[location.coordinates.latitude, location.coordinates.longitude]}>
                    <Popup>
                      <span>{location.category}</span>
                    </Popup>
                  </Marker>
                </div>
              );
            })}
        </Map>
      </div>
    );
  }
}

export default BigMap;