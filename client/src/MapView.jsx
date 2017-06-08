import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export class MapView extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    
    return (
      <div>
        <Map
          style={{height: '30vh'}}
          center={this.props.searchCoordinates}
          zoom={10}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/fabbous/cj3gnpyq200112rtiabmb608s/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmFiYm91cyIsImEiOiJjajNnbmlmNmQwMDRlMnFxc3Nwdms0dGV1In0.3IAYFLfwY1Z_eh1OxEognA"
            attribution="<attribution>" />
            <Marker position={this.props.searchCoordinates}>
            <Popup>
              <span>Hi Everyone <br /> This is map of SF.</span>
            </Popup>
            </Marker>
        
        </Map>

      </div>
    );
  }
}

export default MapView;