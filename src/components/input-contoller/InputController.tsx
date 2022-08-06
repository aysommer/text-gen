import {
   Paper,
   Stack,
   TextField,
   Typography
} from '@mui/material'
import { observer } from 'mobx-react-lite';
import { ChangeEvent } from 'react'
import { DEFAULT_TEXT } from '../../constants';
import { appStore } from '../../store';

const InputController = observer(() => {
   const handleChangeValue = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
      appStore.value = value;
      appStore.format(value, appStore.templateType);
   };

   return (
      <Paper sx={{ display: 'flex', padding: 2 }}>
         <Stack width='50%'>
            <Typography>Input</Typography>
            <TextField
               sx={{ width: '100%', marginRight: 2 }}
               id="outlined-multiline-static"
               multiline
               onChange={handleChangeValue}
               placeholder={DEFAULT_TEXT}
               value={appStore.value}
            />
         </Stack>
         <Stack width='50%' marginLeft={2}>
            <Typography>Output</Typography>
            <TextField
               sx={{ width: '100%' }}
               id="outlined-multiline-static"
               multiline
               aria-readonly={true}
               placeholder={DEFAULT_TEXT}
               value={appStore.formattedValue}
            />
         </Stack>
      </Paper>
   )
});

export default InputController;
