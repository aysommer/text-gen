import { useMemo } from 'react';
import {
   Box,
   useMediaQuery
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Header, Main } from './components/layout';

import './App.css';

const App = () => {
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
   const theme = useMemo(() => createTheme({
      palette: {
         mode: prefersDarkMode ? 'dark' : 'light',
      },
   }), [prefersDarkMode]);

   return (
      <ThemeProvider theme={theme}>
         <Box sx={{ display: 'flex' }} height='100%'>
            <Header />
            <Main />
         </Box>
      </ThemeProvider>
   );
}

export default App;
