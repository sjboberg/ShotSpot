import React from 'react';
import axios from 'axios';
import TileThumb from './TileComponents/TileThumb.jsx';
import IndivComponent from './IndivComponent.jsx';
import BigMap from './BigMap.jsx';
import MapView from './MapView.jsx';
import Navigation from './Navigation.jsx';
import { Redirect } from 'react-router';
const queryString = require('query-string');

class TilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {objects: ['...Loading'], locSelect: 'tileSearch', url: ''};
  }

  handleMapClick() {
    console.log('Tests');
    return <Redirect push to='/BigMap/' />
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

  locationSelect(componentID) {
    this.setState({locSelect: componentID});
  }

  render() {
    if(this.state.locSelect !== 'tileSearch') {
      return <Redirect push to={{pathname: '/IndivComponent/'+ this.state.locSelect, state: {locSelect: this.state.locSelect}}} />;
    }
    return (
    <div className="container" id="tile">
      <MapView searchCoordinates={this.state.searchCoordinates}/>
      <h2 onClick={this.handleMapClick.bind(this)}>Click me for mapview!</h2>
      <Navigation />
      {(this.state.objects.length > 1) ? this.state.objects.map((object) => {
        return (
          <div key={object.coverPhoto}>
            {console.log(object)}
            <div id="columns">
              <TileThumb key={object.coverPhoto} locationSelect={this.locationSelect.bind(this)} photo={object.coverPhoto} id={object.id} name={object.name} latitude={object.coordinates.latitude} longitude= {object.coordinates.longitude} comments={object.comments}/>
            </div>
          </div>
        );
      }) : console.log('The map has only the ...Loading portion')} 
    </div>
    );
  }
}


export default TilePage;