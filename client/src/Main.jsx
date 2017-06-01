import React from 'react';



class Main extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>SpotShots</h2>
         <form className="container" onSubmit={this.handleSubmit}>
          <input ref="srch" type="search" id="search" placeholder="   Search for Locations..." />
        </form>

      </div>
    );
  }
}

export default Main;