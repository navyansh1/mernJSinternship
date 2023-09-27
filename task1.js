function reverseNumber(num) {
    // Convert the number to a string
    let numStr = num.toString();
    
    // Reverse the string
    let reversedStr = numStr.split('').reverse().join('');
    
    // Convert the reversed string back to a number
    let reversedNum = parseFloat(reversedStr);
    
    // Handle negative numbers by multiplying by -1 if necessary
    if (num < 0) {
      reversedNum *= -1;
    }
    
    return reversedNum;
  }
  
  // Example usage:
  let originalNumber = 32243;
  let reversed = reverseNumber(originalNumber);
  console.log("Original Number:", originalNumber);
  console.log("Reversed Number:", reversed);
  