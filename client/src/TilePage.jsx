import React from 'react';
import axios from 'axios';

class TilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    axios({
      url: '/tilePage/getAllDb',
      method: 'get'
    }).then((results) => {
      console.log('This is the result from the tile page: ', results);
    }).catch((error) => {
      console.log('This is the error in TilePage: ', error);
    });
  }

  render() {
    return (
      <div>
        <h2> TILE PAGE!!! </h2>
      </div>
    );
  }
}

export default TilePage;