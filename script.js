// Function to generate a Norian word with simplified transformation rules
function generateNorianWord(word) {
    let newWord = word.toLowerCase();

    // Rule 1: Apply vowel transformations sparingly (only once per word)
    newWord = newWord.replace(/a/g, "ae"); // "a" becomes "ae"
    newWord = newWord.replace(/e/g, "ei"); // "e" becomes "ei"
    newWord = newWord.replace(/o/g, "ou"); // "o" becomes "ou"
    
    // Rule 2: Apply consonant shifts (only where it makes sense for smoothness)
    newWord = newWord.replace(/r/g, "l"); // "r" becomes "l" (smooth sound)
    newWord = newWord.replace(/s/g, "v"); // "s" becomes "v" (soft)
    newWord = newWord.replace(/t/g, "th"); // "t" becomes "th"

    // Rule 3: Apply a single suffix depending on the word type
    let suffixes = ["iel", "ael", "ian"];
    let randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    newWord = newWord + randomSuffix; // Apply suffix

    // Rule 4: Capitalize if the original word was capitalized
    if (word.charAt(0) === word.charAt(0).toUpperCase()) {
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
    }

    return newWord;
}

// Function to handle translation (including punctuation and spaces)
function translateText() {
    let inputText = document.getElementById('inputText').value; // Get the input text
    let direction = document.getElementById('direction').value; // Get translation direction (English to Norian)

    // Split input into words while keeping spaces and punctuation intact
    let words = inputText.split(/(\s+|\b)/); // Split by word boundaries while preserving spaces
    let translatedWords = []; // Array to hold translated words

    words.forEach(word => {
        // If it's a word (not punctuation)
        if (/[a-zA-Z]+/.test(word)) {
            // Remove punctuation if present and store separately
            let punctuation = '';
            if (/[.,!?;]$/.test(word)) {
                punctuation = word.charAt(word.length - 1); // Get last character
                word = word.slice(0, -1); // Remove punctuation
            }

            // Generate the Norian word for this word
            let translatedWord = generateNorianWord(word);

            // Append punctuation back to translated word
            translatedWords.push(translatedWord + punctuation);
        } else {
            // If it's just space or punctuation, keep it as is
            translatedWords.push(word);
        }
    });

    // Join the translated words into a sentence and display it
    document.getElementById('translationResult').innerText = translatedWords.join('');
}
