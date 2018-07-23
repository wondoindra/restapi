// Level 0

// fetch("https://swapi.co/api/people/")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     });

// Level 1

// fetch("https://swapi.co/api/people/")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data.results);
//     });

// Level 2

// fetch("https://swapi.co/api/people/")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         // console.log(data.results);
//         var dataR = data.results;
//         console.log(dataR);
//         dataR.map(insertHtml);
//     });

// function insertHtml(array, index) {
//     // var index = [array.index];
//     var name = [array.name];
//     var height = [array.height];
//     var hairColor = [array.hair_color];
//     var printThis = document.getElementById("container").innerHTML = document.getElementById("container").innerHTML +
//         `<div class='lists'> No. ${index+1} <br> Name: ${name} <br> Height: ${height} <br> Hair Color: ${hairColor} </div>`;
//     return printthis;
// }

// Level 3

fetch("https://api.github.com/users/wondoindra/followers")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        data.map(insertFollowers);
    });

function insertFollowers(array) {
    var name = [array.login];
    var avatar = [array.avatar_url];
    var url = [array.html_url];
    var printFollowers = document.getElementById("container-card").innerHTML = document.getElementById("container-card").innerHTML +
        `<div class='col-3 m-3'> <div class='card' style='width: 18rem;'> <img class='card-img-top' src='${avatar}' alt='Card image cap'>
         <div class='card-body'> <h5 class='card-title'>${name}</h5> <a href='${url}' class='btn btn-primary'>Go to profile
          </a> </div> </div> </div>`;
    return printFollowers;
}