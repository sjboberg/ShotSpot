import React from 'react';
import axios from 'axios';
import Comments from './IndivLocation/Comments.jsx';
import Photographs from './IndivLocation/Photographs.jsx';

class IndivComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Photographs />
        <Comments />
      </div>
    );
  }
}

export default IndivComponent;