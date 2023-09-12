// Input sentence
const sentence = "This is a sample sentence.";

// Initialize counters
let charCount = 0;
let wordCount = 0;
let vowelCount = 0;

// Define a set of vowels for easy checking
const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

// Iterate through each character in the sentence
for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    // Increment character count
    charCount++;

    // Check if the character is a vowel (case-insensitive)
    if (vowels.has(char.toLowerCase())) {
        vowelCount++;
    }

    // Check if the character is a space or the period (end of the word)
    if (char === ' ' || char === '.') {
        wordCount++;
    }
}

// Output the results
console.log(`Length of the sentence: ${charCount} characters`);
console.log(`Number of words in the sentence: ${wordCount} words`);
console.log(`Number of vowels in the sentence: ${vowelCount} vowels`);
