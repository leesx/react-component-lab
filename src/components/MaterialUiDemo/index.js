import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

//-------------------------------
import AutoCompleteExampleSimple from './example/AutoComplete.js'
import BadgeExampleSimple from './example/Badge.js'
//-------------------------------

const Demos = () => (
  <div>
    <AppBar
      title="Title"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    <AutoCompleteExampleSimple />
    <BadgeExampleSimple />
  </div>
)



const MaterialUiMain = () => (
  <MuiThemeProvider >
    <Demos />
  </MuiThemeProvider>
);

export default MaterialUiMain;
