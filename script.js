// Function to translate English to Modified German
function translateToModifiedGerman() {
  // Ensure the element exists
  const englishInput = document.getElementById('englishInput');
  if (englishInput) {
    let englishText = englishInput.value;
    console.log("Input text:", englishText); // Debugging line

    // Apply the translation rules for Modified German
    let translatedText = translateTextToModifiedGerman(englishText);

    // Show the translated text in the output box
    document.getElementById('modifiedGermanOutput').textContent = translatedText;
    console.log("Translated text:", translatedText); // Debugging line
  } else {
    console.error('Error: The input element was not found.');
  }
}

// Function to handle the translation process from English to Modified German
function translateTextToModifiedGerman(text) {
  console.log("Translating to Modified German:", text); // Debugging line
  let words = text.split(' ');

  // Apply transformation for each word
  let translatedWords = words.map(word => {
    word = applyVowelMutation(word); // Apply vowel mutations
    word = applyConsonantMutation(word); // Apply consonant changes
    word = applyNumberRule(word); // Apply pluralization
    word = applyGenderRule(word); // Apply gender rules
    return word;
  });

  let result = translatedWords.join(' ');
  console.log("Translated to Modified German:", result); // Debugging line
  return result;
}

// Rule: Handle vowel mutations (changes the vowels)
function applyVowelMutation(word) {
  return word.replace(/[aeiou]/g, match => {
    switch (match) {
      case 'a': return 'e';  // 'a' becomes 'e'
      case 'e': return 'i';  // 'e' becomes 'i'
      case 'o': return 'u';  // 'o' becomes 'u'
      case 'i': return 'a';  // 'i' becomes 'a'
      case 'u': return 'o';  // 'u' becomes 'o'
      default: return match;
    }
  });
}

// Rule: Handle consonant mutations
function applyConsonantMutation(word) {
  return word.replace(/[ntrl]/g, match => {
    switch (match) {
      case 'n': return 'm';  // 'n' becomes 'm'
      case 't': return 'th'; // 't' becomes 'th'
      case 'r': return 'z';  // 'r' becomes 'z'
      case 'l': return 'y';  // 'l' becomes 'y'
      default: return match;
    }
  });
}

// Rule: Handle pluralization (adding a suffix)
function applyNumberRule(word) {
  const suffixes = ['vian', 'as', 'ir', 'thi', 'ral'];
  let randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  return word + randomSuffix;  // Add random suffix to simulate pluralization
}

// Rule: Simplified gender (for example, 'man' becomes 'adan')
function applyGenderRule(word) {
  if (word === 'man') return 'adan';   // 'man' becomes 'adan'
  if (word === 'woman') return 'edain'; // 'woman' becomes 'edain'
  return word;
}
