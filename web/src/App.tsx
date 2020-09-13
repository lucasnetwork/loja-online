import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import light from './styles/light';
import GlobalStyles from './styles/globalStyles';
import Routes from './routes';
import Header from './components/Header';
import Context from './services/context';

function App() {
  return (
    <Context>
      <Router>
        <ThemeProvider theme={light}>
          <Header />
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
      </Router>
    </Context>
  );
}

export default App;
