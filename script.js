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
  return word;
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
    return 'nor-o'; // Example conjugation for "run"
  }
  return word;
}

// Rule: Articles (simplified)
function applyArticleRule(word) {
  if (word === 'the') {
    return 'i'; // Example for "the"
  }
  return word;
}

// Reverse Number Rule
function reverseNumberRule(word) {
  if (word.endsWith('s')) {
    return word.slice(0, -1); // Convert plural to singular
  }
  return word;
}

// Reverse Gender Rule
function reverseGenderRule(word) {
  if (word === 'adan') {
    return 'man'; // Reverse "adan" back to "man"
  }
  if (word === 'edain') {
    return 'woman'; // Reverse "edain" back to "woman"
  }
  return word;
}

// Reverse Verb Conjugation
function reverseVerbConjugation(word) {
  if (word === 'nor-o') {
    return 'run'; // Reverse "nor-o" back to "run"
  }
  return word;
}

// Reverse Article Rule
function reverseArticleRule(word) {
  if (word === 'i') {
    return 'the'; // Reverse "i" back to "the"
  }
  return word;
}

// Handle unknown words (e.g., "test")
function handleUnknownWord(word) {
  if (word.toLowerCase() === 'test') {
    console.log("Transforming 'test' to 'thtest'"); // Debugging line
    return 'thtest'; // Special transformation for "test"
  }
  return word;
}
