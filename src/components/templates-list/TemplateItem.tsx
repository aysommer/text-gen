import {
   Box,
   Card,
   CardActionArea,
   CardContent,
   Typography
} from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { appStore } from "../../store";
import type { TemplateExample, TemplateType } from "../../types";

type TemplateItemProps = {
   templateType: TemplateType;
   example: TemplateExample;
}

const TemplateItem: React.FC<TemplateItemProps> = observer(({
   templateType,
   example
}) => {
   const handleClick = () => {
      appStore.setTemplateType(templateType);
   }

   return (
      <Box>
         <Card variant="outlined">
            <CardActionArea onClick={handleClick}>
               <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                     {templateType}
                  </Typography>
                  <Typography variant="h5" component="div">
                     {example}
                  </Typography>
               </CardContent>
            </CardActionArea>
         </Card>
      </Box>
   );
});

export default React.memo(TemplateItem);