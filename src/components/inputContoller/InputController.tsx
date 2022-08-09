import {
   Alert,
   IconButton,
   InputAdornment,
   Paper,
   Snackbar,
   Stack,
   TextField,
   Typography
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { observer } from 'mobx-react-lite';
import {
   ChangeEvent,
   useState,
   useMemo
} from 'react';
import { DEFAULT_TEXT } from '../../constants';
import { appStore } from '../../store';

type InputProps = {
   label: string;
   fieldName: keyof Pick<typeof appStore, 'value' | 'formattedValue'>;
   readOnly?: boolean;
   action: InputAction;
};

enum InputAction {
   Clear = 'clear',
   Copy = 'copy'
}

const Input: React.FC<InputProps> = observer(({
   label,
   fieldName,
   readOnly = false,
   action
}) => {
   const [snackbarOpened, setSnackbarOpened] = useState(false);
   const handleChangeValue = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
      appStore[fieldName] = value;
      appStore.format(value, appStore.templateType);
   };
   const actionCallback = {
      [InputAction.Clear]: () => {
         appStore.reset();
         closeSnackbar();
      },
      [InputAction.Copy]: async () => {
         await navigator.clipboard.writeText(appStore.formattedValue)
         setSnackbarOpened(true);
      }
   }[action];
   const closeSnackbar = () => {
      setSnackbarOpened(false);
   }
   const icon = useMemo(() => {
      return {
         [InputAction.Clear]: <CloseIcon />,
         [InputAction.Copy]: <ContentCopyIcon />
      }[action]
   }, [action]);

   return (
      <>
         <Typography variant='h5' fontWeight={700}>{label}</Typography>
         <TextField
            sx={{ width: '100%' }}
            multiline
            aria-readonly={readOnly}
            onChange={handleChangeValue}
            placeholder={DEFAULT_TEXT}
            value={appStore[fieldName]}
            InputProps={(appStore[fieldName]) ? {
               readOnly,
               endAdornment:
                  <InputAdornment position="start" >
                     <IconButton
                        onClick={actionCallback}
                        aria-label="clear button"
                        edge="end"
                     >
                        {icon}
                     </IconButton>
                  </InputAdornment>
            } : { readOnly }}
         />
         <Snackbar
            open={snackbarOpened}
            onClose={closeSnackbar}
            autoHideDuration={3000}>
            <Alert severity='success' sx={{ width: '100%' }}>
               The output message was copied
            </Alert>
         </Snackbar>
      </>
   )
});

const InputController = () => {
   return (
      <Paper sx={{ display: 'flex', padding: 2 }}>
         <Stack direction='row' spacing={2} width='100%'>
            <Stack width='50%' spacing={1}>
               <Input
                  label='Input'
                  fieldName='value'
                  action={InputAction.Clear}
               />
            </Stack>
            <Stack width='50%' spacing={1}>
               <Input
                  label='Output'
                  fieldName='formattedValue'
                  action={InputAction.Copy}
                  readOnly={true}
               />
            </Stack>
         </Stack>
      </Paper>
   )
};

export default InputController;
