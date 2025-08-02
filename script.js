// Translate text from English to Norian
function translateToNorian() {
  let englishText = document.getElementById('englishInput').value;
  console.log("Input text:", englishText); // Debugging line

  // Apply the translation rules (simplified)
  let translatedText = translateTextToNorian(englishText);

  // Show the translated text in the output box
  document.getElementById('norianOutput').textContent = translatedText;
  console.log("Translated text:", translatedText); // Debugging line
}

// Function to handle the translation process from English to Norian
function translateTextToNorian(text) {
  console.log("Translating to Norian:", text); // Debugging line
  let words = text.split(' ');

  // Apply transformation for each word
  let translatedWords = words.map(word => {
    word = handleUnknownWord(word);  // Handle unknown words like "test"
    word = applyVowelMutation(word); // Apply vowel mutations
    word = applyConsonantMutation(word); // Apply consonant changes
    word = applyNumberRule(word);
    word = applyGenderRule(word);
    word = applyVerbConjugation(word);
    word = applyArticleRule(word);
    return word;
  });

  let result = translatedWords.join(' ');
  console.log("Translated to Norian:", result); // Debugging line
  return result;
}

// Rule: Handle vowel mutations
function applyVowelMutation(word) {
  console.log("Applying vowel mutation to:", word); // Debugging line
  return word.replace(/[aeiou]/g, match => {
    switch (match) {
      case 'a': return 'e';
      case 'e': return 'o';
      case 'o': return 'u';
      case 'i': return 'a';
      case 'u': return 'i';
      default: return match;
    }
  });
}

// Rule: Handle consonant mutations
function applyConsonantMutation(word) {
  console.log("Applying consonant mutation to:", word); // Debugging line
  return word.replace(/[tp]/g, match => {
    if (match === 't') return 'th';
    if (match === 'p') return 'f';
    return match;
  });
}

// Handle unknown words (e.g., "test")
function handleUnknownWord(word) {
  if (word.toLowerCase() === 'test') {
    console.log("Transforming 'test' to 'thtest'"); // Debugging line
    return 'thtest'; // Special transformation for "test"
  }
  return word;
}
