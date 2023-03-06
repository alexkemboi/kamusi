let words = ['banana', 'apple', 'orange', 'grape', 'cherry'];

// Sort the array in reverse alphabetical order
words.sort(function(a, b) {
  return b.localeCompare(a);
});

console.log(words);
