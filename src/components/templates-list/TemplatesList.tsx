import {
   Paper,
   Stack
} from "@mui/material";
import { TEMPLATES } from "../../constants";
import { TemplateType } from "../../types";
import TemplateItem from "./TemplateItem";

const TEMPLATES_TYPES = Object.keys(TEMPLATES) as TemplateType[];

const TemplatesList = () => {
   return (
      <Paper elevation={3} sx={{ padding: 2 }}>
         <Stack spacing={2}>
            {TEMPLATES_TYPES.map((type, i) => (
               <TemplateItem
                  key={i}
                  templateType={type}
                  example={TEMPLATES[type]}
               />
            ))}
         </Stack>
      </Paper>
   );
}

export default TemplatesList;