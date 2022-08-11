import {
   Box,
   AppBar,
   Toolbar,
   Typography
} from "@mui/material";

const Header = () => {
   return (
      <Box component='header'>
         <AppBar component='nav'>
            <Toolbar>
               <Typography variant='h5' noWrap component='div'>
                  text-gen
               </Typography>
            </Toolbar>
         </AppBar>
      </Box>
   );
}

export default Header;