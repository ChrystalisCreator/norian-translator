// Example Norian language translation rules for certain words
const dictionary = {
    "hello": "thheiian",
    "world": "vthaeilvian",
    "dog": "vhouneiael",
    "ran": "blighthlyian",
    "across": "aeibouveiian",
    "the": "thheiiel",
    "yard": "mouunthaeiinvian",
    "and": "aeiviel",
    "jumped": "windiel",
    "over": "whivpeileidiel",
    "fence": "thhlouughiel",
    "sun": "thleiivian",
    "was": "whivneil",
    "setting": "whivpeihaliel",
    "casting": "aeivian",
    "a": "thheiael",
    "golden": "vhouiian",
    "hue": "blightiriel",
    "birds": "whiolar",
    "flew": "vhenel",
    "overhead": "thouhniel",
    "singing": "whariel",
    "as": "aeveian",
    "they": "whieli"
    // Add more translations as needed
};

// Function to translate a sentence into Norian
function translateSentence(sentence) {
    const words = sentence.split(" ");
    const translatedWords = words.map(word => {
        const lowerCaseWord = word.toLowerCase();
        return dictionary[lowerCaseWord] || word; // If word isn't in dictionary, keep it the same
    });
    return translatedWords.join(" ");
}

// Function to handle the translation of paragraph text
function translateText() {
    const inputText = document.getElementById("inputText").value;
    if (inputText.trim() === "") {
        document.getElementById("outputText").innerHTML = "Please enter some text to translate.";
        return;
    }

    const sentences = inputText.split(". ");
    const translatedSentences = sentences.map(sentence => translateSentence(sentence));
    const translatedText = translatedSentences.join(". ");
    
    document.getElementById("outputText").innerText = translatedText;
}
