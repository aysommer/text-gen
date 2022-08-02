const reverse = (value: string): string => {
   if (value.length <= 1) {
      return value;
   }

   return value.split('').reverse().join('');
}

export default reverse;