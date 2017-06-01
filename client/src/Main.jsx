import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    axios({
      url: '/search/result',
      method: 'POST',
      data: 'See me'
    }).then((results) => {
      console.log('This is the result from the axios call in Main.jsx: ', results);
    }).catch((error) => {
      console.log('This is an error from the axios call in Main.jsx: ', error);
    });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>SpotShots</h2>
         <form className="container" onSubmit={this.handleSubmit}>
          <input ref="srch" type="search" id="search" name="searchbar" placeholder= "Search for Locations..." />
         </form>

      </div>
    );
  }
}

export default Main;