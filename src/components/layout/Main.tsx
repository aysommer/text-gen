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
         p: 2,
         width: '100%',
         bgcolor: 'background.default',
      }}>
         <Toolbar />
         <Grid container rowSpacing={2} columnSpacing={2} alignItems="stretch" direction="row">
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