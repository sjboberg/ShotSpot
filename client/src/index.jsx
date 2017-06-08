
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Main from './Main.jsx';
import TilePage from './TilePage.jsx';
import ImageUpload from './ImageUpload.jsx';
import IndivComponent from './IndivComponent.jsx'
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

export default Index;


ReactDOM.render(
<Router>
  <div>
    <Route exact path="/" component={Index} />
    <Route path="/TilePage" component={TilePage} />
      <Route path="/IndivComponent" component={IndivComponent} />
    <Route path="/ImageUpload" component={ImageUpload} />
  </div>
</Router>
, document.getElementById('app'));
