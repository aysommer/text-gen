const FULLWIDTH_REGEXP: RegExp = /[!-~]/g;
const HEX_DIFF: number = 0xFEE0;

const shiftCharCode = (delta: number) => {
   return (char: string) => String.fromCharCode(char.charCodeAt(0) + delta);
}

const fullwidth = (value: string): string => {
   if (value.length <= 1) {
      return value;
   }

   return value.replace(FULLWIDTH_REGEXP, shiftCharCode(HEX_DIFF));
}

export default fullwidth;