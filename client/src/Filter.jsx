import React from 'react';
import axios from 'axios';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentValue: 'View All Categories', categories: ['Street Art', 'Astrophotography', 'Architecture', 'Landscape', 'Cityscape', 'Tourist', 'Nature']};
  }

  componentWillMount() {
    this.setState({currentValue: this.props.initValue});
  }

  handleStateChange (event) {
    this.setState({currentValue: event.target.value});
  }

  render() {
    let locNames = {};
    locNames['View All Categories'] = 'default';
    this.state.categories.forEach((value, i) => {
      locNames[value] = i;
    });
    return (
      <div>
        <select name='categories' className="ui fluid dropdown" multiple="" id="filter-button"value={this.props.initValue} onChange={this.props.handleChangeFilter}>
          {Object.keys(locNames).map((value, i) => { return (this.props.initValue !== value) ? <option key={i} value={value}>{value}</option> : <option key={i} value={value} selected  >{value}</option>})}
        </select>
      </div>
    );
  }
}

export default Filter;