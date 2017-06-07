
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Main from './Main.jsx';
import ImageUpload from './ImageUpload.jsx';



class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}


ReactDOM.render(<Main />, document.getElementById('app'));
