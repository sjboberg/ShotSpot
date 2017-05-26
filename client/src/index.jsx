import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p> This is the index component </p>
      </div>
    );
  }
}

// export default Index;

ReactDOM.render(<Index />, document.getElementById('app'));

