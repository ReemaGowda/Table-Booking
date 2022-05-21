// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Menu from './components/Menu';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="header clearfix">
              <Menu/>
              <h3 className="text-muted">BookThe Table</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {this.props.children}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
          <footer className="footer">
            <p>restaurant.com</p>
          </footer>
          </div>
        </div>

      </div>

    );
  }
}

export default App;
