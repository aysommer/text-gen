import {
   Stack,
   ListItemButton,
   Typography
} from "@mui/material";
import React, { useCallback } from "react";
import type { appStore } from "../../store";
import type { Template } from "../../types";

type TemplateItemProps = {
   isSelected: boolean;
   handleSetTemplate: typeof appStore.setTemplateType;
} & Pick<Template, 'type' | 'example'>;

const TemplateItem: React.FC<TemplateItemProps> = ({
   isSelected,
   handleSetTemplate,
   type,
   example
}) => {
   const handleOnClick = useCallback(() => {
      handleSetTemplate(type);
   }, [handleSetTemplate, type]);

   return (
      <ListItemButton selected={isSelected} onClick={handleOnClick}>
         <Stack>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               {type}
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