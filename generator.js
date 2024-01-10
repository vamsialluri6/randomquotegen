const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
];

const quoteText = document.getElementById("quote-text");
const quoteButton = document.getElementById("quote-button");

quoteButton.addEventListener("click", generateRandomQuote);

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = randomQuote;
}