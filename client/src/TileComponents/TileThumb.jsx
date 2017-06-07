import React from 'react';

class TileThumb extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={() => this.props.locationSelect(this.props.id)}>
        <figure>
          <img src={this.props.photo} />
          <figcaption>
            {this.props.name}
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default TileThumb;