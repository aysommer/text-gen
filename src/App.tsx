import {
   AppBar,
   Paper,
   Toolbar,
   Typography,
   Box,
   Grid
} from '@mui/material';
import { InputController } from './components/input-contoller';

import './App.css';

export enum Templates {
   Default = 'default',
   Reverse = 'reverse'
}

const App = () => {
   return (
      <Box sx={{ display: 'flex' }}>
         <Box component='header'>
            <AppBar component='nav' sx={{ borderRadius: 4 }}>
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
               container rowSpacing={1}
               columnSpacing={2}
               alignItems="stretch"
               direction="row">
               <Grid item xs={6}>
                  <InputController />
               </Grid>
               <Grid item xs={6}>
                  <Paper elevation={3}>
                     Templates list
                  </Paper>
               </Grid>
            </Grid>

         </Box>
      </Box>
   );
}

export default App;
