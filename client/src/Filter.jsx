import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let locNames = {};
    locNames['View All Categories'] = 'default';
    (this.props.coordObjs.length > 1) ? this.props.coordObjs.forEach((value, i) => {
      locNames[value.category] = i;
    }) : console.log('Waiting to get data');
    return (
      <div className="filter">
        <select value={this.props.initVal} onChange={this.props.handleChangeFilter}>
          {console.log(Object.keys(locNames)[1], ' This is a locname')}
          {console.log(this.props.initValue, ' This is the init val')}
          {Object.keys(locNames).map((value, i) => { return (this.props.initValue !== value) ? <option key={i} value={value}>{value}</option> : <option key={i} value={value} selected  >{value}</option>})}
        </select>
      </div>
    );
  }
}

export default Filter;