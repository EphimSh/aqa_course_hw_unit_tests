function validatePassword(password: string) {
  return (
    password.length >= 8 &&
    /\S/.test(password) &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password)
  );
}

// uncomment below to try it
// const testPasswords = 
// ['Password1', 'Qwerty123', 'StrongPass9', 'ValidPASS123','CheckMe2023',
// 'short1','alllowercase','ALLUPPERCASE','12345678','        ','NoDigitsHere',
// 'nouppercase123','NOLOWERCASE123','mixedCase','Just8Cha','      1 ',
// '!!!!!!123','lowerUPPER','Only     ','_____ABC','aA     1',
// ];

// console.log(testPasswords.map(validatePassword));
