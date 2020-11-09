const array = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data =>array.push(...data))

/* functionfindMatches(wordToMatch, array) {
    return array.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        
    })
} */