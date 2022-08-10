import { isEven, isOdd } from "./common";

const FULLWIDTH_REGEXP: RegExp = /[!-~]/g;
const HEX_DIFF: number = 0xFEE0;

export default class Formatter {
   static toDefault = (value: string) => {
      return value;
   }

   static toReversed = (value: string): string => {
      return value.split('').reverse().join('');
   }

   static toUpperCase = (value: string): string => {
      return value.toUpperCase();
   }

   static toLowerCase = (value: string): string => {
      return value.toLowerCase();
   }

   static toPianoCase = (value: string, isFirstLowerCase: boolean): string => {
      return value.split('').map((char: string, index: number) => {
         const transformCondition = (isFirstLowerCase) ? isEven : isOdd;
         return (transformCondition(index)) ? char.toLowerCase() : char.toUpperCase();
      }).join('');
   }

   static toFullwidth = (value: string): string => {
      return value.replace(FULLWIDTH_REGEXP, this.shiftCharCode(HEX_DIFF));
   }

   private static shiftCharCode = (delta: number) => {
      return (char: string) => String.fromCharCode(char.charCodeAt(0) + delta);
   }
}
