=// Norian Dictionary (English to Norian)
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

// Translation function
function translateText() {
    let inputText = document.getElementById('inputText').value;
    let direction = document.getElementById('direction').value;
    let words = inputText.split(" ");
    let translatedWords = [];

    // English to Norian Translation
    if (direction === "en-norian") {
        words.forEach(word => {
            let translatedWord = dictionary[word.toLowerCase()] || verbTenses[word.toLowerCase()] || word;
            translatedWords.push(translatedWord);
        });
    } 
    // Norian to English Translation
    else if (direction === "norian-en") {
        words.forEach(word => {
            let translatedWord = Object.keys(dictionary).find(key => dictionary[key] === word.toLowerCase()) || word;
            translatedWords.push(translatedWord);
        });
    }

    // Display translation result
    document.getElementById('translationResult').innerText = translatedWords.join(" ");
}
