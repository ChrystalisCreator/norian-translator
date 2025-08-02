// Translate German to Modified German
function translateToModifiedGerman() {
  let germanText = document.getElementById('germanInput').value;
  console.log("Input text:", germanText);

  // Apply the translation rules for Modified German
  let translatedText = translateTextToModifiedGerman(germanText);

  // Show the translated text in the output box
  document.getElementById('modifiedGermanOutput').textContent = translatedText;
  console.log("Translated text:", translatedText);
}

// Function to handle the translation process from German to Modified German
function translateTextToModifiedGerman(text) {
  console.log("Translating to Modified German:", text);
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
  console.log("Translated to Modified German:", result);
  return result;
}

// Rule: Handle vowel mutations
function applyVowelMutation(word) {
  return word.replace(/[aeiou]/g, match => {
    switch (match) {
      case 'a': return 'e';
      case 'e': return 'i';
      case 'o': return 'u';
      case 'i': return 'a';
      case 'u': return 'o';
      default: return match;
    }
  });
}

// Rule: Handle consonant mutations
function applyConsonantMutation(word) {
  return word.replace(/[ntrl]/g, match => {
    switch (match) {
      case 'n': return 'm';
      case 't': return 'th';
      case 'r': return 'z';
      case 'l': return 'y';
      default: return match;
    }
  });
}

// Rule: Handle pluralization (add suffixes like 'vian', 'as', etc.)
function applyNumberRule(word) {
  const suffixes = ['vian', 'as', 'ir', 'thi', 'ral'];
  let randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  return word + randomSuffix;
}

// Rule: Simplified gender (for example, 'man' becomes 'adan')
function applyGenderRule(word) {
  if (word === 'man') return 'adan';
  if (word === 'woman') return 'edain';
  return word;
}

// Translate Modified German to German (reverse translation)
function translateToGerman() {
  let modifiedGermanText = document.getElementById('modifiedGermanInput').value;
  console.log("Modified German text:", modifiedGermanText);

  // Apply reverse translation rules (optional, for now it just returns the same)
  let translatedText = translateTextToGerman(modifiedGermanText);

  // Show the translated text in the output box
  document.getElementById('germanOutput').textContent = translatedText;
  console.log("Translated to German:", translatedText);
}

// Reverse translation (for now, just returns the same)
function translateTextToGerman(text) {
  return text; // For now, just return the same text
}
