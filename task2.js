function sortStringAlphabetically(inputString) {
    // Split the string into an array of characters
    let charArray = inputString.split('');
  
    // Sort the array alphabetically
    charArray.sort();
  
    // Join the sorted characters back into a string
    let sortedString = charArray.join('');
  
    return sortedString;
  }
  
  // Example usage:
  let input = "webmaster";
  let sorted = sortStringAlphabetically(input);
  console.log("Example String:", input);
  console.log("Expected String:", sorted);
  