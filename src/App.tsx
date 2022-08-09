import {
   AppBar,
   Toolbar,
   Typography,
   Box,
   Grid
} from '@mui/material';
import { InputController } from './components/inputContoller';
import { TemplatesList } from './components/templatesList';

import './App.css';

const App = () => {
   return (
      <Box sx={{ display: 'flex' }}>
         <Box component='header'>
            <AppBar component='nav'>
               <Toolbar>
                  <Typography
                     variant='h6'
                     noWrap
                     component='div'>
                     text-gen
                  </Typography>
               </Toolbar>
            </AppBar>
         </Box>
         <Box component='main' sx={{ p: 2, width: '100%' }}>
            <Toolbar />
            <Grid
               container
               rowSpacing={2}
               columnSpacing={2}
               alignItems="stretch"
               direction="row">
               <Grid item xs={6}>
                  <InputController />
               </Grid>
               <Grid item xs={6}>
                  <TemplatesList />
               </Grid>
            </Grid>
         </Box>
      </Box>
   );
}

export default App;
