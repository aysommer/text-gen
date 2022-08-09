import { isEven, isOdd } from './common';

const pianoCase = (value: string, isFirstLowerCase = true): string => {
   if (value.length <= 1) {
      return value;
   }

   return value.split('').map((char, index) => {
      const transformCondition = (isFirstLowerCase) ? isEven : isOdd;
      return (transformCondition(index)) ? char.toLowerCase() : char.toUpperCase();
   }).join('');
}

export default pianoCase;