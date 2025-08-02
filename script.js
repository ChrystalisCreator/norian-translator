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

// Function to translate text
function translateText() {
    let inputText = document.getElementById('inputText').value; // Get the input text
    let direction = document.getElementById('direction').value; // Get the direction (English to Norian or vice versa)
    let words = inputText.split(/\s+/); // Split the input by spaces and new lines
    let translatedWords = []; // Array to store the translated words

    words.forEach(word => {
        // Remove punctuation and store separately
        let punctuation = '';
        if (/[.,!?;]$/.test(word)) {
            punctuation = word.charAt(word.length - 1); // Get last character
            word = word.slice(0, -1); // Remove punctuation
        }

        // Convert the word to lowercase for case-insensitive lookup
        let wordLower = word.toLowerCase();

        // Translate each word using the dictionary and verb tenses
        let translatedWord = dictionary[wordLower] || verbTenses[wordLower] || word;

        // If the original word was capitalized, preserve the capitalization in the translated word
        if (word.charAt(0) === word.charAt(0).toUpperCase()) {
            translatedWord = translatedWord.charAt(0).toUpperCase() + translatedWord.slice(1);
        }

        // Append the punctuation back to the translated word
        translatedWords.push(translatedWord + punctuation);
    });

    // Display the translated result
    document.getElementById('translationResult').innerText = translatedWords.join(' ');
}
