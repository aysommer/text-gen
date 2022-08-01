import {
   Paper,
   TextField
} from '@mui/material'
import { useState, ChangeEvent } from 'react'

const DEFAULT_VALUE = 'Lorem Ipsum';

const InputController = () => {
   const [value, setValue] = useState<string>(DEFAULT_VALUE);

   const handleChangeValue = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(target.value);
   };

   return (
      <Paper>
         <TextField
            sx={{ width: '100%' }}
            id="outlined-multiline-static"
            multiline
            onChange={handleChangeValue}
            placeholder={DEFAULT_VALUE}
            value={value}
         />
      </Paper>
   )
}

export default InputController;
