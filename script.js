// Translate text from English to Norian
function translateToNorian() {
  let englishText = document.getElementById('englishInput').value;

  // Apply the translation rules (simplified)
  let translatedText = translateTextToNorian(englishText);

  // Show the translated text in the output box
  document.getElementById('norianOutput').textContent = translatedText;
}

// Translate text from Norian to English
function translateToEnglish() {
  let norianText = document.getElementById('norianInput').value;

  // Apply the reverse translation rules (simplified)
  let translatedText = translateTextToEnglish(norianText);

  // Show the translated text in the output box
  document.getElementById('englishOutput').textContent = translatedText;
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

// Function to handle the translation process from Norian to English
function translateTextToEnglish(text) {
  console.log("Translating to English:", text); // Debugging line
  let words = text.split(' ');

  // Reverse the transformation for each word
  let translatedWords = words.map(word => {
    word = handleUnknownWord(word);  // Handle unknown words like "test"
    word = reverseVowelMutation(word); // Reverse vowel mutations
    word = reverseConsonantMutation(word); // Reverse consonant changes
    word = reverseNumberRule(word);
    word = reverseGenderRule(word);
    word = reverseVerbConjugation(word);
    word = reverseArticleRule(word);
    return word;
  });

  let result = translatedWords.join(' ');
  console.log("Translated to English:", result); // Debugging line
  return result;
}

// Rule: Handle pluralization (simplified)
function applyNumberRule(word) {
  if (word === 'test') { // Special case for "test"
    return 'thtest'; // Example transformation for "test"
  }
  return word + 'vian'; // Add a random suffix for plurals to make it more distinct
}

// Rule: Handle vowel mutations
function applyVowelMutation(word) {
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
  return word.replace(/[tp]/g, match => {
    if (match === 't') return 'th';
    if (match === 'p') return 'f';
    return match;
  });
}

// Rule: Handle gender (simplified)
function applyGenderRule(word) {
  if (word === 'man') {
    return 'adan'; // Example for "man"
  }
  if (word === 'woman') {
    return 'edain'; // Example for "woman"
  }
  return word;
}

// Rule: Verb conjugation (simplified)
function applyVerbConjugation(word) {
  if (word === 'run') {
    return 'no
