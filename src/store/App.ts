import { makeAutoObservable } from "mobx";
import { DEFAULT_TYPE, TEMPLATES_CFG } from "../constants";
import { TemplateType } from "../types";

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
      const { formatFunction } = TEMPLATES_CFG[templateType];
      this.formattedValue = (formatFunction) ? formatFunction(value) : value;
   }

   public reset = (): void => {
      this.value = this.formattedValue = '';
   }
}

const appStore = new AppStore();

export default appStore;