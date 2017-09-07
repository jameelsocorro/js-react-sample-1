
import mdi from 'mdi/css/materialdesignicons.min.css';
import style from './content/sass/app.module.scss';

import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import SleighdogsHeader from './components/sleighdogs-header';
import SleighdogsBody from './components/sleighdogs-body';

class App extends Component {
  render() {
    return (
      <div>
        <SleighdogsHeader />
        <SleighdogsBody />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
