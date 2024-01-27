import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import theme from './assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        My Conctats
      </div>
    </ThemeProvider>
  );
}

export default App;
