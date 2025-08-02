// Function to generate a "Norian" word based on subtle and controlled transformations
function generateNorianWord(word) {
    // Step 1: Apply vowel transformations (only once per word)
    let newWord = word.toLowerCase();

    // Apply vowel changes (simplified)
    newWord = newWord.replace(/a/g, "ae"); // "a" becomes "ae"
    newWord = newWord.replace(/e/g, "ei"); // "e" becomes "ei"
    newWord = newWord.replace(/i/g, "ai"); // "i" becomes "ai"
    newWord = newWord.replace(/o/g, "ou"); // "o" becomes "ou"
    newWord = newWord.replace(/u/g, "ue"); // "u" becomes "ue"

    // Step 2: Apply consonant shifts subtly
    newWord = newWord.replace(/r/g, "l");  // "r" becomes "l"
    newWord = newWord.replace(/s/g, "v");  // "s" becomes "v"
    newWord = newWord.replace(/t/g, "th"); // "t" becomes "th"
    newWord = newWord.replace(/p/g, "f");  // "p" becomes "f"

    // Step 3: Apply suffixes
    // We can randomly apply suffixes based on the type of word
    let suffixes = ["iel", "ael", "ian"];
    let suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    newWord = newWord + suffix; // Append suffix

    // Step 4: Capitalize the first letter if needed
    if (word.charAt(0) === word.charAt(0).toUpperCase()) {
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
    }

    return newWord;
}

// Function to translate text (handling punctuation and spaces)
function translateText() {
    let inputText = document.getElementById('inputText').value; // Get the input text
    let direction = document.getElementById('direction').value; // Get the direction (English to Norian or vice versa)

    // Split the input text into words while keeping spaces and punctuation intact
    let words = inputText.split(/(\s+|\b)/); // Split by word boundaries while preserving spaces
    let translatedWords = []; // Array to store the translated words

    words.forEach(word => {
        // Check if it's a valid word or punctuation
        if (/[a-zA-Z]+/.test(word)) {
            // Handle punctuation
            let punctuation = '';
            if (/[.,!?;]$/.test(word)) {
                punctuation = word.charAt(word.length - 1); // Get last character
                word = word.slice(0, -1); // Remove punctuation
            }

            // Generate the Norian word for each valid word
            let translatedWord = generateNorianWord(word);

            // Add the punctuation back to the translated word
            translatedWords.push(translatedWord + punctuation);
        } else {
            // If it's space or punctuation, just add it as is
            translatedWords.push(word);
        }
    });

    // Join the words into a translated sentence
    document.getElementById('translationResult').innerText = translatedWords.join('');
}
