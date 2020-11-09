/* const { default: fetch } = require("node-fetch"); */
const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const array = [];


fetch(endpoint)
    .then(blob => blob.json())
    .then(data =>array.push(...data))


function findMatches(wordToMatch, array) {
    return array.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
        
    });
} 

function displayMatches() {
    console.log(this.value);
}

const searchInput = document.querySelector('search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);