// Translate text from English to Norian
function translateToNorian() {
  let englishText = document.getElementById('englishInput').value;

  // Apply the translation rules (simplified and dynamic)
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
  let words = text.split(' ');

  // Apply all the rules dynamically for each word
  let translatedWords = words.map(word => {
    word = applyNumberRule(word);
    word = applyGenderRule(word);
    word = applyVerbConjugation(word);
    word = applyArticleRule(word);
    return word;
  });

  return translatedWords.join(' ');
}

// Function to handle the translation process from Norian to English
function translateTextToEnglish(text) {
  let words = text.split(' ');

  // Reverse the translation process for each word
  let translatedWords = words.map(word => {
    word = reverseNumberRule(word);
    word = reverseGenderRule(word);
    word = reverseVerbConjugation(word);
    word = reverseArticleRule(word);
    return word;
  });

  return translatedWords.join(' ');
}

// Number rule: Singular, plural, and class plural (simplified)
function applyNumberRule(word) {
  if (word.endsWith('vian')) {
    return word.slice(0, -4) + 's'; // Simplified pluralization rule
  }
  return word;
}

// Gender rule: Handle gender-neutral translations (simplified)
function applyGenderRule(word) {
  if (word.toLowerCase() === 'man') {
    return 'adan'; // Example for male-specific translation
  }
  if (word.toLowerCase() === 'woman') {
    return 'edain'; // Example for female-specific translation
  }
  return word;
}

// Verb Conjugation rule (simplified for the present tense)
function applyVerbConjugation(word) {
  if (word.toLowerCase() === 'run') {
    return 'nor-' + 'o'; // Example verb form for 'to run' in the present tense
  }
  return word;
}

// Article rule: Definite article "the"
function applyArticleRule(word) {
  if (word.toLowerCase() === 'the') {
    return 'i'; // Example of definite article "the" translated
  }
  return word;
}

// Reverse Number Rule: Handle plural and singular reversals (simplified)
function reverseNumberRule(word) {
  if (word.endsWith('s')) {
    return word.slice(0, -1); // Simplified singularization rule
  }
  return word;
}

// Reverse Gender Rule: Handle gender-specific translations (simplified)
function reverseGenderRule(word) {
  if (word.toLowerCase() === 'adan') {
    return 'man'; // Reverse male-specific translation
  }
  if (word.toLowerCase() === 'edain') {
    return 'woman'; // Reverse female-specific translation
  }
  return word;
}

// Reverse Verb Conju
