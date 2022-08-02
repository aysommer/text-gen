import {
   Paper,
   Stack
} from "@mui/material";
import { TEMPLATES } from "../../constants";
import { TemplateType } from "../../types";
import TemplateItem from "./TemplateItem";

export type SetTemplate = React.Dispatch<React.SetStateAction<TemplateType>>;

type TemplatesListProps = {
   setTemplate: SetTemplate;
}

const TEMPLATES_TYPES = Object.keys(TEMPLATES) as TemplateType[];

const TemplatesList: React.FC<TemplatesListProps> = ({ setTemplate }) => {
   return (
      <Paper elevation={3} sx={{ padding: 2 }}>
         <Stack direction='row'>
            {TEMPLATES_TYPES.map((type, i) => (
               <TemplateItem
                  key={i}
                  type={type}
                  example={TEMPLATES[type]}
                  setTemplate={setTemplate}
               />
            ))}
         </Stack>
      </Paper>
   );
}

export default TemplatesList;