// 1. URL and options for the fetch request
const url = 'https://random-quote-generator2.p.rapidapi.com/randomQuote';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '38bc3ce281msh2fb776643b3486ap10efbbjsn80ada2c43209', //API key
        'x-rapidapi-host': 'random-quote-generator2.p.rapidapi.com' //API Host
    }
};

// 2. Asynchronous Function to fetch and display a random quote
async function getRandomQuote() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();  // Parse JSON response
        const quote = data[0];  // Accessing the first object in the array

        // Updating HTML with the quote and author
        document.getElementById('quote').innerText = `"${quote.Quote}"`;
        document.getElementById('author').innerText = `- ${quote.Author}`;
    } catch (error) { //in case of an error this code will play out
        console.error('Error fetching the quote:', error);
        document.getElementById('quote').innerText = 'Failed to fetch quote.';
        document.getElementById('author').innerText = '';
    }
}

// 33.Adding event listener for button click to fetch a new quote
document.getElementById('newQuoteButton').addEventListener('click', getRandomQuote);

// 4.Initialing quote load
getRandomQuote();
