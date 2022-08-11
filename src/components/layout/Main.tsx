import {
   Box,
   Toolbar,
   Grid
} from "@mui/material";
import { InputController } from "../inputContoller";
import { TemplatesList } from "../templatesList";

const Main = () => {
   return (
      <Box component='main' sx={{
         width: '100%',
         height: '100%',
         boxSizing: 'border-box'
      }}>
         <Toolbar />
         <Grid
            container
            rowSpacing={2}
            columnSpacing={2}
            alignItems="stretch"
            direction={{ xs: 'column', md: 'row' }}>
            <Grid item xs={6}>
               <InputController />
            </Grid>
            <Grid item xs={6}>
               <TemplatesList />
            </Grid>
         </Grid>
      </Box>
   );
}

export default Main;