import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let locNames = {};
    (this.props.coordObjs.length > 1) ? this.props.coordObjs.forEach((value, i) => {
      locNames[value.category] = i;
    }) : console.log('Waiting to get data');

    console.log('These are the location names: ', locNames);
    return (
      <div className="filter">
        <select value={this.props.initVal} onChange={this.props.handleChangeFilter}>
          {Object.keys(locNames).map((value, i) => { return <option key={i} value={value}>{value}</option>; })}
        </select>
      </div>
    );
  }
}

export default Filter;