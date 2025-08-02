// Pronouns
const pronouns = {
    nominative: {
        I: 'sal',
        you: 'va',
        he: 'su',
        she: 'si',
        we: 'sar',
        you_plural: 'var',
        they: 'sen'
    },
    genitive: {
        my: 'salen',
        your: 'vian',
        his: 'siun',
        her: 'siin',
        our: 'saren',
        your_plural: 'viaren',
        their: 'sienen'
    }
};

// Noun pluralization rules
function pluralizeNoun(word) {
    if (word.endsWith('l')) return word.slice(0, -1) + 'r';
    if (word.endsWith('ir')) return word.slice(0, -2) + 'iae';
    if (word.endsWith('a') || word.endsWith('ae')) return word + 'r';
    if (word.endsWith('e')) return word + 'n';
    if (word.endsWith('ss')) return word + 'ir';
    return word + 'a';
}

// Verb tense suffixes
function conjugateVerb(word, tense) {
    const arType = /ar$/;
    const weType = /we$/;
    const irregular = /^(?!ar|we)/;

    if (arType.test(word)) {
        if (tense === 'past') return word.slice(0, -2) + "'and";
        if (tense === 'future') return word.slice(0, -2) + "'illae";
    } else if (weType.test(word)) {
        if (tense === 'past') return word.slice(0, -2) + "'nand";
        if (tense === 'future') return word.slice(0, -2) + "'sillae";
    } else if (irregular.test(word)) {
        if (tense === 'past') return word + "'and";
        if (tense === 'future') return word + "'ennae";
    }
    return word;
}

// Adjective suffix
function adjectiveForm(word) {
    return word + 'lith';
}

// Translate a sentence
function translateSentence(sentence) {
    const words = sentence.split(/\b/);
    const translatedWords = words.map(word => {
        word = word.trim().toLowerCase();
        if (pronouns.nominative[word]) return pronouns.nominative[word];
        if (pronouns.genitive[word]) return pronouns.genitive[word];
        if (word.endsWith('ing')) return conjugateVerb(word, 'present');
        if (word.endsWith('ed')) return conjugateVerb(word, 'past');
        if (word.endsWith('s')) return pluralizeNoun(word);
        return adjectiveForm(word);
    });
    return translatedWords.join('');
}

// Handle translation
function translateText() {
    const inputText = document.getElementById('inputText').value;
    if (!inputText.trim()) {
        document.getElementById('outputText').textContent = 'Please enter some text to translate.';
        return;
    }
    const translatedText = translateSentence(inputText);
    document.getElementById('outputText').textContent = translatedText;
}
