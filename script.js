// Norian Dictionary (English to Norian)
const dictionary = {
    "hello": "vayen",
    "dog": "zara",
    "ran": "rani",
    "yard": "narion",
    "red": "rylin",
    "across": "rith",
    "I": "ai",
    "you": "sai",
    "love": "jihyli",
    "family": "ysi",
    "friend": "mella",
    "house": "illath",
    "go": "nara",
    "see": "varel",
    "sleep": "anar",
    "fight": "tharan"
};

// Verb Tenses
const verbTenses = {
    "ran": "rani",
    "run": "ral",
    "go": "nara",
    "see": "varel"
};

// Function to generate a "Norian" word for unknown words
function generateElvenWord(word) {
    // Rule 1: Add a suffix for unknown words
    let newWord = word.toLowerCase() + "iel"; // Elven-style suffix "-iel"

    // Rule 2: Modify the word to make it sound more "elven"
    // Change vowels to make it sound more melodic (vowel harmony)
    newWord = newWord.replace(/[aeiou]/g, (match) => {
        if (match === "a") return "e"; // "a" becomes "e" for melodic sound
        if (match === "e") return "i"; // "e" becomes "i" to smooth it
        if (match === "o") return "a"; // "o" becomes "a" to soften it
        if (match === "u") return "o"; // "u" becomes "o" for a rounded sound
        return match;
    });

    // Rule 3: Modify consonants to add elegance
    // Replace harder consonants with softer ones like "l", "v", or "r"
    newWord = newWord.replace(/r/g, "l");  // Soft "r" to "l"
    newWord = newWord.replace(/t/g, "th"); // Hard "t" to "th"
    newWord = newWord.replace(/s/g, "v");  // Soft "s" to "v"

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

            // Convert the word to lowercase for case-insensitive lookup
            let wordLower = word.toLowerCase();

            // Translate each word using the dictionary and verb tenses
            let translatedWord = dictionary[wordLower] || verbTenses[wordLower] || generateElvenWord(word);

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
