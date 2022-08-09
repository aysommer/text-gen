import { makeAutoObservable } from "mobx";
import { DEFAULT_TYPE } from "../constants";
import { TemplateType } from "../types";
import {
   lowerCase,
   reverse,
   upperCase,
   pianoCase,
   fullwidth
} from "../utils";

const FormatFunctionCfg = {
   'Default': null,
   'Reverse': reverse,
   'Upper case': upperCase,
   'Lower case': lowerCase,
   'Piano case 1': (value: string) => pianoCase(value, true),
   'Piano case 2': (value: string) => pianoCase(value, false),
   'Fullwidth': fullwidth
};

class AppStore {
   public value: string = '';
   public formattedValue: string = '';
   public templateType: TemplateType = DEFAULT_TYPE;

   constructor() {
      makeAutoObservable(this);
   }

   public setTemplateType = (templateType: TemplateType) => {
      this.templateType = templateType;

      this.format(this.value, templateType);
   }

   public format = (value: string, templateType: TemplateType): void => {
      const formatFunction = FormatFunctionCfg[templateType];
      this.formattedValue = (formatFunction) ? formatFunction(value) : value;
   }

   public reset = (): void => {
      this.value = this.formattedValue = '';
   }
}

const appStore = new AppStore();

export default appStore;