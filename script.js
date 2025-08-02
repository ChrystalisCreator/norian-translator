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
    word = applyNumberRule(word); // Apply pluralization rule (example)
    word = applyGenderRule(word); // Apply gender rules
    word = applyVerbConjugation(word); // Apply verb conjugation
    word = applyArticleRule(word); // Apply article rules
    return word;
  });

  let result = translatedWords.join(' ');
  console.log("Translated to Norian:", result); // Debugging line
  return result;
}

// Rule: Handle pluralization (simplified)
function applyNumberRule(word) {
  console.log("Applying number rule to:", word); // Debugging line
  if (word === 'test') { // Special case for "test"
    return 'thtest'; // Example transformation for "test"
  }
  return word + 'vian'; // Add a random suffix for plurals to make it more distinct
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

// Rule: Handle consonant mutations (avoid applying this to "test")
function applyConsonantMutation(word) {
  console.log("Applying consonant mutation to:", word); // Debugging line
  if (word === 'thtest') { // Avoid mutating 'thtest'
    return word;
  }
  return word.replace(/[tp]/g, match => {
    if (match === 't') return 'th';
    if (match === 'p') return 'f';
    return match;
  });
}

// Rule: Handle gender (simplified)
function applyGenderRule(word) {
  console.log("Applying gender rule to:", word); // Debugging line
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
  console.log("Applying verb conjugation to:", word); // Debugging line
  if (word === 'run') {
    return 'nor-o'; // Example conjugation for "run"
  }
  return word;
}

// Rule: Articles (simplified)
function applyArticleRule(word) {
  console.log("Applying article rule to:", word); // Debugging line
  if (word === 'the') {
    return 'i'; // Example for "the"
  }
  return word;
}

// Handle unknown words (e.g., "test")
function handleUnknownWord(word) {
  console.log("Handling unknown word:", word); // Debugging line
  if (word.toLowerCase() === 'test') {
    console.log("Transforming 'test' to 'thtest'"); // Debugging line
    return 'thtest'; // Specia
