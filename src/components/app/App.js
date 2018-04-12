import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppBodyContainer from '../../containers/AppBodyContainer';
import './App.css';

class App extends Component {

  render() {

    const theme = createMuiTheme({
      props: {
        MuiButtonBase: {
          disableRipple: true,
        },
      },
    });
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              <span>ExcelExcel.com - quick lookup on keyboard shortcuts, notes, links</span>
            </h1>
          </header>
          <div className="App-body">
            <AppBodyContainer />
          </div>
          <footer>
            <span>Icon made by Freepik from www.flaticon.com</span>
          </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
