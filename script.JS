// let carrier = document.getElementById("carrier")
let allcountry = []

// fetch("https://restcountries.com/v3.1/all")
//     .then(result => result.json())
//     .then(data => {
//         console.log(data);
//         let countrynames = data.map( country => country.name.common)
//         console.log(countrynames);
//         carrier.innerHTML += countrynames
//     })

let countryTable = document.getElementById('countryTable');
function fetchall() {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            allcountry.push(country.name.coatofArms.continents.common)
        });
        dispcountry()
    })
}


function dispcountry() {
    allcountry.sort().forEach(country => {
        countryTablex.innerHTML += `<div>
        <td>${country}</td>
   </div>`
    });
}
fetchall()