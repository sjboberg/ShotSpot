import React from 'react';
import axios from 'axios';
import TileThumb from './TileComponents/TileThumb.jsx';
import IndivComponent from './IndivComponent.jsx';
import MapView from './MapView.jsx';




class TilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {objects: ['...Loading'], locSelect: 'tileSearch'};
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

  locationSelect(componentID) {
    this.setState({locSelect: componentID});
  }

  render() {

    if (this.state.locSelect === 'tileSearch') {
      return (
      <div className="container" id="tile">
        <MapView />
        {(this.state.objects.length > 1) ? this.state.objects.map((object) => {
          return (
            <div key={object.photos[0]}>
              {console.log(object)}
              <div id="columns">
                <TileThumb key={object.photos[0]} locationSelect={this.locationSelect.bind(this)} photo={object.photos[0]} id={object.id} name={object.name} latitude={object.coordinates.latitude} longitude= {object.coordinates.longitude} comments={object.comments}/>
              </div>
            </div>
          );
        }) : console.log('The map has only the ...Loading portion')} 
      </div>
      );
    } else {
      return (
        <div className="container" id= "tile">
          <IndivComponent locationID={this.state.locSelect}/>
        </div>
      );
    }

  }
}


export default TilePage;