import {
   Paper,
   Stack,
   TextField,
   Typography,
   Box
} from '@mui/material'
import { observer } from 'mobx-react-lite';
import { ChangeEvent } from 'react'
import { DEFAULT_TEXT } from '../../constants';
import { appStore } from '../../store';

type InputProps = {
   label: string;
   fieldName: keyof Pick<typeof appStore, 'value' | 'formattedValue'>;
   readOnly?: boolean;
};

const Input: React.FC<InputProps> = observer(({
   label,
   fieldName,
   readOnly = false
}) => {
   const handleChangeValue = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
      appStore[fieldName] = value;
      appStore.format(value, appStore.templateType);
   };

   return (
      <Stack width='50%'>
         <Typography>{label}</Typography>
         <TextField
            sx={{ width: '100%'}}
            id="outlined-multiline-static"
            multiline
            aria-readonly={readOnly}
            onChange={handleChangeValue}
            placeholder={DEFAULT_TEXT}
            value={appStore[fieldName]}
         />
      </Stack>
   )
});

const InputController = () => {
   return (
      <Paper sx={{ display: 'flex', padding: 2 }}>
         <Stack direction='row' spacing={2} width='100%'>
            <Input
               label='Input'
               fieldName='value'
            />
            <Input
               label='Output'
               fieldName='formattedValue'
               readOnly={true}
            />
         </Stack>
      </Paper>
   )
};

export default InputController;
