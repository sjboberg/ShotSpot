
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Main from './Main.jsx';
import TilePage from './TilePage.jsx';
import ImageUpload from './ImageUpload.jsx';
import { BrowserRouter as Router,
         Route,
         Link
} from 'react-router-dom';



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


ReactDOM.render(
<Router>
  <div>
    <Route exact path="/" component={Main} />
    <Route path="/TilePage" component={TilePage} />
    <Route path="/ImageUpload" component={ImageUpload} />
  </div>
</Router>
, document.getElementById('app'));
