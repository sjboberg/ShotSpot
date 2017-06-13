import React from 'react';
import axios from 'axios';
import TileThumb from './TileComponents/TileThumb.jsx';
import IndivComponent from './IndivComponent.jsx';
import BigMap from './BigMap.jsx';
import MapView from './MapView.jsx';
import Navigation from './Navigation.jsx';
import Filter from './Filter.jsx';
import { Redirect } from 'react-router';
const queryString = require('query-string');
import Masonry from 'react-masonry-component';
import MasonryInfiniteScroller from 'react-masonry-infinite';

var masonryOptions = {
    transitionDuration: 0
};

var style= {
  paddingLeft: "100px"
}

class TilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {objects: ['...Loading'], locSelect: 'tileSearch', url: '', bigMap: false, value: 'volvo'};
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  handleMapClick() {
    this.setState({bigMap: true});
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

  handleChangeFilter(event) {
    this.setState({value: event.target.value});
  }

  render() {
    if (this.state.bigMap) {
      return <Redirect push to={{pathname: '/BigMap/' + this.props.location.state.stringy, state: {objects: this.state.objects, Latitude: this.props.location.state.Latitude, Longitude: this.props.location.state.Longitude}}} />;
    } else if (this.state.locSelect !== 'tileSearch') {
      return <Redirect push to={{pathname: '/Location/' + this.state.locSelect + '/' + this.props.location.state.stringy, state: {locSelect: this.state.locSelect, Latitude: this.props.location.state.Latitude, Longitude: this.props.location.state.Longitude}}} />;
    } else {
      return (
        <div id="tile">
          <MapView searchCoordinates={this.state.searchCoordinates}/>
<<<<<<< HEAD
         <div className="container-fluid-fullwidth">
          <div className="searched-location">
          {this.props.location.state.searchedLocation}
          </div>
          <div className="explore">
          <h> Explore </h>
          </div>
          <Masonry
            className={'locations-masonry'}
            style={style}
            options={masonryOptions}
          >
=======
          <h2 onClick={this.handleMapClick.bind(this)}>Click me for mapview!</h2>
          <Filter initVal={this.state.value} handleChangeFilter={this.handleChangeFilter}/>
          <Navigation />
>>>>>>> "filter now passes selection to tilemap state"
          {(this.state.objects.length > 1) ? this.state.objects.map((object) => {
            return (
              <div key={object.coverPhoto}>
                {console.log(object)}
                <div>
                  <TileThumb key={object.coverPhoto} locationSelect={this.locationSelect.bind(this)} photo={object.coverPhoto} id={object.id} name={object.name} latitude={object.coordinates.latitude} longitude= {object.coordinates.longitude} comments={object.comments}/>
                </div>
              </div>
            );
          }) : console.log('The map has only the ...Loading portion')} 
          </Masonry>
          </div>
        </div>
      );
    }
  }
}


export default TilePage;