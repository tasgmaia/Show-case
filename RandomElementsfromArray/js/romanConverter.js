function convertToRoman(num) {
 
  var romanTable = {
    M:1000,
    CM:900,D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1};

     let romanConverted = '';
     
      for (const key in romanTable) {
        const numberValue = romanTable[key];
        while (numberValue <= num){
          num -= numberValue;
          romanConverted += key;
        }
      }
return romanConverted;

}

convertToRoman(465);
