// Function to generate a "Norian" word with minimal, controlled elven-like rules
function generateNorianWord(word) {
    // Rule 1: Apply vowel transformations (only once per word)
    let newWord = word.toLowerCase();
    
    // Apply specific vowel changes: "a" -> "ae", "e" -> "ei", "o" -> "ou"
    newWord = newWord.replace(/a/g, "ae"); // "a" becomes "ae"
    newWord = newWord.replace(/e/g, "ei"); // "e" becomes "ei"
    newWord = newWord.replace(/o/g, "ou"); // "o" becomes "ou"

    // Rule 2: Apply subtle consonant shifts (only where it sounds natural)
    newWord = newWord.replace(/r/g, "l");  // "r" becomes "l" (smooth sound)
    newWord = newWord.replace(/s/g, "v");  // "s" becomes "v" (softer)
    newWord = newWord.replace(/t/g, "th"); // "t" becomes "th" (elven touch)

    // Rule 3: Apply suffixes sparingly to make it more unique
    let suffixes = ["iel", "ael", "ian"];
    let randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    newWord = newWord + randomSuffix;

    // Rule 4: Capitalize the first letter if the original word was capitalized
    if (word.charAt(0) === word.charAt(0).toUpperCase()) {
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
    }

    return newWord;
}

// Function to translate text (handling punctuation and spaces)
function translateText() {
    let inputText = document.getElementById('inputText').value; // Get the input text
    let direction = document.getElementById('direction').value; // Get the direction (English to Norian or vice versa)
    
    // Split the input text into individual words, keeping spaces and punctuation intact
    let words = inputText.split(/(\s+|\b)/); // Split by word boundaries while preserving spaces
    let translatedWords = []; // Array to store the translated words

    words.forEach(word => {
        // Check if the word is a valid word or if it's punctuation/space
        if (/[a-zA-Z]+/.test(word)) {
            // Remove punctuation if it exists and store separately
            let punctuation = '';
            if (/[.,!?;]$/.test(word)) {
                punctuation = word.charAt(word.length - 1); // Get last character
                word = word.slice(0, -1); // Remove punctuation
            }

            // Generate the Norian word for each word
            let translatedWord = generateNorianWord(word);

            // Append punctuation back to the translated word
            translatedWords.push(translatedWord + punctuation);
        } else {
            // If it's a space or punctuation, just add it to the array as-is
            translatedWords.push(word);
        }
    });

    // Join the translated words into a sentence and display the result
    document.getElementById('translationResult').innerText = translatedWords.join('');
}
