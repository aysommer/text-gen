const lowerCase = (value: string): string => {
   if (value.length <= 1) {
      return value;
   }

   return value.toLowerCase();
}

export default lowerCase;