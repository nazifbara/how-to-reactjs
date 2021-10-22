import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reboot, { defaultRebootTheme } from 'styled-reboot';

import App from './App';

const GlobalStyle = createGlobalStyle`
  ${reboot}

  body {
    font-family: 'Poppins', sans-serif;
  }
`;

const Root = () => {
  return (
    <ThemeProvider theme={{ ...defaultRebootTheme }}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
