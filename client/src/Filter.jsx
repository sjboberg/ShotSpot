import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filter">
        <select value={this.props.initVal} onChange={this.props.handleChangeFilter}>
          {this.props.coordObjs.map((value, i) => { return <option key={i} value={value.category}>{value.category}</option>; })}
        </select>
      </div>
    );
  }
}

export default Filter;