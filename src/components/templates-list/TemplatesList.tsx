import {
   Paper,
   List,
   Typography,
   Box
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { TEMPLATES } from "../../constants";
import { appStore } from "../../store";
import { TemplateType } from "../../types";
import TemplateItem from "./TemplateItem";

const TEMPLATES_TYPES = Object.keys(TEMPLATES) as TemplateType[];

const TemplatesList = observer(() => {
   return (
      <Paper elevation={3}>
         <Box paddingTop={2} paddingLeft={2}>
            <Typography variant='h5' fontWeight={700}>Templates</Typography>
         </Box>
         <List>
            {TEMPLATES_TYPES.map((templateType) => (
               <TemplateItem
                  key={templateType}
                  isSelected={appStore.templateType === templateType}
                  handleSetTemplate={appStore.setTemplateType}
                  templateType={templateType}
                  example={TEMPLATES[templateType]}
               />
            ))}
         </List>
      </Paper>
   );
});

export default TemplatesList;