function findMatches(wordToMatch, array) {
    return array.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
        
    });
} 

function displayMatches() {
    const matchArray = findMatches(this.value, array);
    const html = matchArray.map(place => {
        return `
        <li> 
            <span class="name">${place.city}, ${place.state}</span>
            <span class="population">${place.population}</span>
        </li>
            `;
    }).join('');
    suggestions.innerHTML = html;
    console.log(matchArray);
}



async function loadData() {
const endpoint = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
const json = await data.json();

const array = [];
const prom = fetch(json);

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => array.push(...data));

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
  
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches); 

}
window.onload = loadData;