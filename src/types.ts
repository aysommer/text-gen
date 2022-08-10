export type FormatFunction = (value: string, ...other: unknown[]) => string;
export type TemplateType =
   'Default' |
   'Reverse' |
   'Upper case' |
   'Lower case' |
   'Piano case 1' |
   'Piano case 2' |
   'Fullwidth';

export type Template = {
   type: TemplateType;
   example: string;
   formatFunction: FormatFunction;
};