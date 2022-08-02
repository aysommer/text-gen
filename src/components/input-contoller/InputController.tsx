import {
   Paper,
   TextField
} from '@mui/material'
import { useState, ChangeEvent } from 'react'
import { DEFAULT_TEXT } from '../../constants';
import { TemplateType } from '../../types';
import { reverse } from '../../utils'

type InputControllerProps = {
   templateName: TemplateType;
}

const InputController: React.FC<InputControllerProps> = ({ templateName }) => {
   const [value, setValue] = useState<string>(DEFAULT_TEXT);
   const [formattedValue, setFormattedValue] = useState<string>(DEFAULT_TEXT);

   const handleChangeValue = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(target.value)

      const format = {
         Default: () => setFormattedValue(target.value),
         Reverse: () => setFormattedValue(reverse(target.value))
      }[templateName];

      format();
   };

   return (
      <Paper sx={{ display: 'flex', padding: 2 }}>
         <TextField
            sx={{ width: '100%', marginRight: 2 }}
            id="outlined-multiline-static"
            multiline
            onChange={handleChangeValue}
            placeholder={DEFAULT_TEXT}
            value={value}
         />
         <TextField
            sx={{ width: '100%' }}
            id="outlined-multiline-static"
            multiline
            onChange={handleChangeValue}
            placeholder={DEFAULT_TEXT}
            value={formattedValue}
         />
      </Paper>
   )
}

export default InputController;
