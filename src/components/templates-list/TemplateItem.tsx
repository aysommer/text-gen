import {
   Stack,
   ListItemButton,
   Typography
} from "@mui/material";
import React, { useCallback } from "react";
import type { appStore } from "../../store";
import type { TemplateExample, TemplateType } from "../../types";

type TemplateItemProps = {
   isSelected: boolean;
   templateType: TemplateType;
   handleSetTemplate: typeof appStore.setTemplateType;
   example: TemplateExample;
}

const TemplateItem: React.FC<TemplateItemProps> = ({
   isSelected,
   handleSetTemplate,
   templateType,
   example
}) => {
   const handleOnClick = useCallback(() => {
      handleSetTemplate(templateType);
   }, [handleSetTemplate, templateType]);

   return (
      <ListItemButton selected={isSelected} onClick={handleOnClick}>
         <Stack>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               {templateType}
            </Typography>
            <Typography variant="h5" component="div">
               {example}
            </Typography>
         </Stack>
      </ListItemButton>
   );
};

export default React.memo(TemplateItem, (prevProps, nextProps) => {
   return prevProps.isSelected === nextProps.isSelected;
});