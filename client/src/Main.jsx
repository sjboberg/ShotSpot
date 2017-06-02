import React from 'react';
import axios from 'axios';
import SearchComponent from './SearchComponent.jsx';
import TilePage from './TilePage.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchValue: '', submitted: false};
  }

  updateInputValue (e) {
    this.setState({
      searchValue: e.target.value
    });
  }

  handleSubmit(e) {
    axios({
      url: '/search/results',
      method: 'post',
      data: {search: this.state.searchValue}
    }).then((results) => {
      console.log('This is the result from the axios call in Main.jsx: ', results);
      this.setState({submitted: results.data});
    }).catch((error) => {
      console.log('This is an error from the axios call in Main.jsx: ', error);
    });
    e.preventDefault();
  }

  render() {

    var ComponentToRender = SearchComponent;
    if (this.state.submitted === true) {
      ComponentToRender = TilePage;
    }

    return (
      <div>
        <h2>SpotShots</h2>
        <ComponentToRender submission={this.handleSubmit.bind(this)} changes={this.updateInputValue.bind(this)}/>
        
      </div>
    );
  }
}

export default Main;