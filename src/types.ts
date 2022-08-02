import { TEMPLATES } from './constants';

export type TemplateType = keyof typeof TEMPLATES;
export type TemplateExample = typeof TEMPLATES[keyof typeof TEMPLATES];