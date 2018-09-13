import React, {Component, Fragment} from 'react';
import '../style/app.scss';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <p className="page-header">react-dex</p>
        <div className="pokedex-container">
          <div className="left-screen">
            <div className="top-border">
            </div>
            <div className="poke-display-container">
              <div className="poke-display">
                <h1>Hello world!</h1>
              </div>
            </div>
          </div>
          <div className="right-screen">
          </div>
        </div>
      </Fragment>
    );
  }
}