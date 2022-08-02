import {
   AppBar,
   Toolbar,
   Typography,
   Box,
   Grid
} from '@mui/material';
import { InputController } from './components/input-contoller';
import { TemplatesList } from './components/templates-list';
import { useState } from 'react';
import { DEFAULT_TYPE } from './constants';
import type { TemplateType } from './types';

import './App.css';

const App = () => {
   const [template, setTemplate] = useState<TemplateType>(DEFAULT_TYPE);

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
                  <InputController templateName={template} />
               </Grid>
               <Grid item xs={6}>
                  <TemplatesList setTemplate={setTemplate} />
               </Grid>
            </Grid>
         </Box>
      </Box>
   );
}

export default App;
