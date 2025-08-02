// Function to generate a "Norian" word with Quenya influence and custom modifications
function generateNorianWord(word) {
    // Rule 1: Apply vowel transformations (selectively)
    let vowelsTransformed = word.toLowerCase().replace(/[aeiou]/g, (match) => {
        if (match === "a") return "ae";  // "a" becomes "ae"
        if (match === "e") return "ei";  // "e" becomes "ei"
        if (match === "i") return "ei"; // "i" becomes "ei"
        if (match === "o") return "ou";  // "o" becomes "ou"
        if (match === "u") return "ou"; // "u" becomes "ou"
        return match;
    });

    // Rule 2: Apply consonant shifts subtly
    let consonantShifted = vowelsTransformed
        .replace(/r/g, "l")  // "r" becomes "l"
        .replace(/s/g, "v")  // "s" becomes "v"
        .replace(/t/g, "th") // "t" becomes "th"
        .replace(/p/g, "f"); // "p" becomes "f"

    // Rule 3: Apply suffixes based on word length or type
    let suffixes = ["iel", "ael", "thiel", "ian"];
    let suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    
    let newWord = consonantShifted + suffix;

    // Rule 4: Capitalize the first letter if the original word was capitalized
    if (word.charAt(0) === word.charAt(0).toUpperCase()) {
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
    }

    return newWord;
}

// Function to translate text
function translateText() {
    let inputText = document.getElementById('inputText').value; // Get the input text
    let direction = document.getElementById('direction').value; // Get the direction (English to Norian or vice versa)
    
    // Handle multiple spaces and punctuation correctly using regular expressions
    let words = inputText.split(/(\s+|\b)/); // Split by word boundaries while preserving spaces
    let translatedWords = []; // Array to store the translated words

    words.forEach(word => {
        // Check if the word is a pure word or if it's a punctuation or space
        if (/[a-zA-Z]+/.test(word)) {
            // Remove punctuation and store separately
            let punctuation = '';
            if (/[.,!?;]$/.test(word)) {
                punctuation = word.charAt(word.length - 1); // Get last character
                word = word.slice(0, -1); // Remove punctuation
            }

            // Generate the Norian word for each word
            let translatedWord = generateNorianWord(word);

            // Append the punctuation back to the translated word
            translatedWords.push(translatedWord + punctuation);
        } else {
            // If it's a space or punctuation, just add it to the translated words array
            translatedWords.push(word);
        }
    });

    // Join the translated words into a sentence
    document.getElementById('translationResult').innerText = translatedWords.join('');
}
