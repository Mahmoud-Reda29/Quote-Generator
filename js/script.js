var quotes = [{
    quote: `“Be yourself; everyone else is already taken.”`,
    author: '― Oscar Wilde',
},
{
    quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    author: '― Marilyn Monroe',
},
{
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    author: '― Albert Einstein',
},
{
    quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    author: '― Dr. Seuss',
},
{
    quote: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
    author: '― J.K. Rowling, Harry Potter and the Goblet of Fire',
},
{
    quote: `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`,
    author: '― Ralph Waldo Emerson',
}
];


var usedIndices = [];

function fetchQuotes() {
    if (usedIndices.length === quotes.length) {
        document.getElementById('randomquote').innerHTML = `Our Today's Quotes Ended`;
        document.getElementById('author').innerHTML = `Press the button below to recieve a random quote!`;
        usedIndices = [];
    }

    var random;
    do {
        random = Math.floor(Math.random() * quotes.length);
    } while (usedIndices.includes(random));

    usedIndices.push(random);

    document.getElementById('randomquote').innerHTML = `${quotes[random].quote}`;
    document.getElementById('author').innerHTML = `${quotes[random].author}`;
}


