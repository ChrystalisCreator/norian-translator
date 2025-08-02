// New transformation rules
function transformWord(word) {
    // List of common words to avoid transforming (these are kept simpler)
    const commonWords = ["a", "the", "is", "are", "was", "were", "it", "of", "and", "to", "in"];
    if (commonWords.includes(word.toLowerCase())) {
        return word;  // Keep common words unchanged
    }

    // Apply more drastic vowel changes to make the language sound alien
    word = word.replace(/a/g, "ae")
               .replace(/e/g, "ii")
               .replace(/i/g, "ei")
               .replace(/o/g, "ou")
               .replace(/u/g, "ou")
               .replace(/y/g, "i"); // Change "y" to "i" to further distance from English

    // Apply consonant simplifications
    word = word.replace(/th/g, "thh")  // "th" -> "thh"
               .replace(/ch/g, "kh")   // "ch" -> "kh"
               .replace(/sh/g, "s");   // "sh" -> "s"

    // Handling endings to distinguish noun, verb, and adjective forms
    if (word.endsWith("ing")) {
        word = word.replace(/ing$/, "al"); // "running" -> "runal" (present tense verb)
    } else if (word.endsWith("ed")) {
        word = word.replace(/ed$/, "or"); // "walked" -> "walkor" (past tense verb)
    } else if (word.endsWith("s")) {
        word = word + "ar"; // "dog" -> "dogar" (noun)
    } else {
        word = word + "ir"; // Default transformation for adjectives
    }

    // Make the word fluid by removing certain redundant vowels or consonants
    word = word.replace(/ii/g, "i")
               .replace(/eiou/g, "ou")
               .replace(/ee/g, "ii");

    return word;
}

// Function to translate a sentence into Norian based on the new rules
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
