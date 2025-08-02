// Function to apply vowel and consonant transformations for Norian
function transformWord(word) {
    // Apply vowel transformations (a -> ae, e -> ei, o -> ou)
    word = word.replace(/a/g, "ae").replace(/e/g, "ei").replace(/o/g, "ou");

    // Apply basic suffix transformations
    if (word.endsWith("ing")) {
        word = word.replace(/ing$/, "iel"); // "running" -> "runiel"
    } else if (word.endsWith("ed")) {
        word = word.replace(/ed$/, "iel"); // "jumped" -> "jumpiel"
    } else if (word.endsWith("s")) {
        word = word + "vian"; // "dog" -> "dogvian"
    } else {
        word = word + "iel"; // Default transformation for other words
    }

    return word;
}

// Function to translate a sentence into Norian based on rules
function translateSentence(sentence) {
    const words = sentence.split(/\b/); // Split sentence by word boundaries (including punctuation)
    const translatedWords = words.map(word => {
        // Remove punctuation to match transformation rules
        const cleanWord = word.replace(/[^\w\s]|_/g, "").toLowerCase();
        let transformedWord = cleanWord;

        if (cleanWord) {
            transformedWord = transformWord(cleanWord); // Apply language rules
        }

        // Reinsert punctuation as-is if it was removed
        if (/[^\w\s]|_/g.test(word)) {
            return word; // Return punctuation as-is
        }

        return transformedWord;
    });
    return translatedWords.join("");
}

// Function to handle the translation of paragraph text
function translateText() {
    const inputText = document.getElementById("inputText").value;
    if (inputText.trim() === "") {
        document.getElementById("outputText").innerHTML = "Please enter some text to translate.";
        return;
    }

    const sentences = inputText.split(/([.?!])/); // Split sentences but keep punctuation for context
    const translatedSentences = sentences.map(sentence => {
        return translateSentence(sentence.trim());
    });
    const translatedText = translatedSentences.join(" "); // Combine all translated sentences

    document.getElementById("outputText").innerText = translatedText;
}
