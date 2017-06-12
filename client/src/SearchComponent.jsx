import React from 'react';

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   return (
      <div id="input" >
        <form onSubmit={this.props.submission} onChange={this.props.changes} className="ui icon input">
          <i className="inverted circular search link icon"></i>
          <input ref="search" type="text" id="button" placeholder= " Search for Locations..." />
        </form>
        </div>
    );
 }
}


export default SearchComponent;