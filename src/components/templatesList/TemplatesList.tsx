import {
   Paper,
   List,
   Typography,
   Box
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { TEMPLATES_CFG } from "../../constants";
import { appStore } from "../../store";
import { TemplateType } from "../../types";
import TemplateItem from "./TemplateItem";

const TEMPLATES = Object.keys(TEMPLATES_CFG) as TemplateType[];

const TemplatesList = observer(() => {
   return (
      <Paper>
         <Box paddingTop={2} paddingLeft={2}>
            <Typography variant='h5' fontWeight={700}>Templates</Typography>
         </Box>
         <List>
            {TEMPLATES.map((type) => (
               <TemplateItem
                  key={type}
                  isSelected={appStore.templateType === type}
                  handleSetTemplate={appStore.setTemplateType}
                  type={type}
                  example={TEMPLATES_CFG[type].example}
               />
            ))}
         </List>
      </Paper>
   );
});

export default TemplatesList;