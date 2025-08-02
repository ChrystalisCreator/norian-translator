// Function to generate a "Norian" word based on elvish sentence structure and modified rules
function generateNorianWord(word) {
    // Rule 1: Apply vowel transformations (only once per word)
    let newWord = word.toLowerCase();
    
    // Apply vowel changes: "a" -> "ae", "e" -> "ei", "i" -> "ii", "o" -> "ou", "u" -> "uu"
    newWord = newWord.replace(/a/g, "ae"); // "a" becomes "ae"
    newWord = newWord.replace(/e/g, "ei"); // "e" becomes "ei"
    newWord = newWord.replace(/i/g, "ii"); // "i" becomes "ii"
    newWord = newWord.replace(/o/g, "ou"); // "o" becomes "ou"
    newWord = newWord.replace(/u/g, "uu"); // "u" becomes "uu"

    // Rule 2: Apply consonant shifts (only when necessary)
    newWord = newWord.replace(/r/g, "l");  // "r" becomes "l"
    newWord = newWord.replace(/s/g, "v");  // "s" becomes "v"
    newWord = newWord.replace(/t/g, "th"); // "t" becomes "th"
    newWord = newWord.replace(/p/g, "f");  // "p" becomes "f"

    // Rule 3: Apply suffixes (depending on the word's meaning or context)
    let suffixes = ["iel", "ael", "thiel", "ian"];
    let randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    newWord = newWord + randomSuffix;

    // Rule 4: Capitalize the first letter if the original word was capitalized
    if (word.charAt(0) === word.charAt(0).toUpperCase()) {
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
    }

    return newWord;
}

// Function to translate text, handling punctuation and spaces
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
