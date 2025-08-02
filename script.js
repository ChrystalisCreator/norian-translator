// Norian Dictionary (English to Norian)
const dictionary = {
    "hello": "vayen",
    "dog": "zara",
    "ran": "rani",
    "yard": "narion",
    "red": "rylin",
    "across": "rith",
    "love": "jihyli",
    "family": "ysi",
    "friend": "mella",
    "house": "illath",
    "go": "nara",
    "see": "varel",
    "sleep": "anar",
    "fight": "tharan",
    "too": "sai"  // Special case for "too"
};

// Verb Tenses
const verbTenses = {
    "ran": "rani",
    "run": "ral",
    "go": "nara",
    "see": "varel"
};

// Function to generate a "Norian" word for unknown words with refined elven-like rules
function generateElvenWord(word) {
    // Rule 1: Special case for common words
    if (word.toLowerCase() === "i") {
        return "Ai"; // "I" should be "Ai"
    }
    if (word.toLowerCase() === "you") {
        return "o"; // "You" should be "o"
    }
    if (word.toLowerCase() === "too") {
        return "sai"; // "Too" should be "sai"
    }
    
    // Rule 2: Add an Elven-style suffix
    let suffixes = ["iel", "ael", "ian", "ra"];
    let randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    let newWord = word.toLowerCase() + randomSuffix;

    // Rule 3: Modify the word to make it sound more "elven"
    // Add smooth vowel combinations
    newWord = newWord.replace(/[aeiou]/g, (match) => {
        if (match === "a") return "ae";  // "a" becomes "ae" for smoother sound
        if (match === "e") return "ei";  // "e" becomes "ei"
        if (match === "i") return "ei"; // "i" becomes "ei"
        if (match === "o") return "io";  // "o" becomes "io"
        if (match === "u") return "ou"; // "u" becomes "ou"
        return match;
    });

    // Rule 4: Modify consonants for a more subtle elven-like sound
    // Replace "r" with "l" in some cases (but leave "r" when needed)
    newWord = newWord.replace(/r/g, (match) => (Math.random() > 0.5 ? "l" : match));
    // Replace "s" with "sh" for some softer words, "v" for others
    newWord = newWord.replace(/s/g, (match) => (Math.random() > 0.5 ? "sh" : "v"));
    // Replace "t" with "th" for a softer pronunciation
    newWord = newWord.replace(/t/g, "th");
    // Occasionally replace "p" with "f" for smoother flow
    newWord = newWord.replace(/p/g, "f");

    // Rule 5: Ensure open syllables for smoother sound (syllables that end in vowels)
    newWord = newWord.replace(/([aeiou])([aeiou])/g, "$1$2"); // Ensure a flowing vowel-consonant structure

    // Rule 6: Capitalize the first letter if the original word was capitalized
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
