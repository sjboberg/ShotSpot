import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let locNames = {};
<<<<<<< e6f9372c05407765d9b69647bf2c156ef9aa8162
    
=======
>>>>>>> "added view all categories to dropdown"
    locNames['View All Categories'] = 'default';
    (this.props.coordObjs.length > 1) ? this.props.coordObjs.forEach((value, i) => {
      locNames[value.category] = i;
    }) : console.log('Waiting to get data');
    return (
      <div className="filter">
        <select value={this.props.initValue} onChange={this.props.handleChangeFilter}>
          {Object.keys(locNames).map((value, i) => { return (this.props.initValue !== value) ? <option key={i} value={value}>{value}</option> : <option key={i} value={value} selected >{value}</option>; })}
        </select>
      </div>
    );
  }
}

export default Filter;