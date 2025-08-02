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

// Translate function triggered by the button
function translateText() {
    let inputText = document.getElementById('inputText').value; // Get the input text
    let direction = document.getElementById('direction').value; // Get the direction (English to Norian or vice versa)
    let words = inputText.split(" "); // Split the input text into words
    let translatedWords = []; // Initialize an empty array for the translated words

    // English to Norian Translation
    if (direction === "en-norian") {
        words.forEach(word => {
            // Translate each word, check if it's in the dictionary, otherwise leave it as is
            let translatedWord = dictionary[word.toLowerCase()] || verbTenses[word.toLowerCase()] || word;
            translatedWords.push(translatedWord);
        });
    } 
    // Norian to English Translation
    else if (direction === "norian-en") {
        words.forEach(word => {
            // Reverse the dictionary lookup
            let translatedWord = Object.keys(dictionary).find(key => dictionary[key] === word.toLowerCase()) || word;
            translatedWords.push(translatedWord);
        });
    }

    // Output the translation result
    document.getElementById('translationResult').innerText = translatedWords.join(" ");
}
