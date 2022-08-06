import { makeAutoObservable } from "mobx";
import { DEFAULT_TYPE } from "../constants";
import { TemplateType } from "../types";
import { lowerCase, reverse, upperCase } from "../utils";

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
      switch (templateType) {
         case 'Default': this.formattedValue = value; break;
         case 'Reverse': this.formattedValue = reverse(value); break;
         case 'Upper case': this.formattedValue = upperCase(value); break;
         case 'Lower case': this.formattedValue = lowerCase(value); break;
      }
   }
}

const appStore = new AppStore();

export default appStore;