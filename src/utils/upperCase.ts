const upperCase = (value: string): string => {
   if (value.length <= 1) {
      return value;
   }

   return value.toUpperCase();
}

export default upperCase;