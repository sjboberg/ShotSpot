import React from 'react';

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form className="searchbar" onSubmit={this.props.submission} onChange={this.props.changes}>
          <input ref="search" type="search" id="search" name="searchbar" placeholder= " Search for Locations..." />
        </form>
      </div>
    );
  }
}

export default SearchComponent;