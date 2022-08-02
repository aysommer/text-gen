import {
   Box,
   Card,
   CardActionArea,
   CardContent,
   Typography
} from "@mui/material";
import React from "react";
import type { TemplateExample, TemplateType } from "../../types";
import { SetTemplate } from "./TemplatesList";

type TemplateItemProps = {
   type: TemplateType;
   example: TemplateExample;
   setTemplate: SetTemplate;
}

const TemplateItem: React.FC<TemplateItemProps> = ({
   type,
   example,
   setTemplate
}) => {
   const handleClick = () => {
      setTemplate(type);
   }

   return (
      <Box sx={{ minWidth: 250, minHeight: 250 }}>
         <Card variant="outlined">
            <CardActionArea onClick={handleClick}>
               <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                     {type}
                  </Typography>
                  <Typography variant="h5" component="div">
                     {example}
                  </Typography>
               </CardContent>
            </CardActionArea>
         </Card>
      </Box>
   );
}

export default React.memo(TemplateItem);