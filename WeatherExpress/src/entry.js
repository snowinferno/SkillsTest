import React from 'react';
import {render} from 'react-dom';
import {MuiThemeProvider} from 'material-ui';
import Page from './components/Page/Page';

render((
  <MuiThemeProvider>
      <Page/>
  </MuiThemeProvider>
  ), document.getElementById('app'))
