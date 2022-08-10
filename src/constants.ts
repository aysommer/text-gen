import {
   Template,
   TemplateType
} from "./types";
import { Formatter } from "./utils";

export const DEFAULT_TEXT = 'Lorem Ipsum';
export const DEFAULT_TYPE = 'Default';
export const TEMPLATES_CFG: Record<TemplateType, Omit<Template, 'type'>> = {
   'Default': {
      example: 'LoremIpsum',
      formatFunction: Formatter.toDefault
   },
   'Reverse': {
      example: 'muspI meroL',
      formatFunction: Formatter.toReversed
   },
   'Upper case': {
      example: 'LOREM IPSUM',
      formatFunction: Formatter.toUpperCase
   },
   'Lower case': {
      example: 'lorem ipsum',
      formatFunction: Formatter.toLowerCase
   },
   'Piano case 1': {
      example: 'lOrEm iPsUm',
      formatFunction: (value: string) => Formatter.toPianoCase(value, true)
   },
   'Piano case 2': {
      example: 'LoReM IpSuM',
      formatFunction: (value: string) => Formatter.toPianoCase(value, false)
   },
   'Fullwidth': {
      example: 'Ｌｏｒｅｍ  ｉｐｓｕｍ',
      formatFunction: Formatter.toFullwidth
   }
}