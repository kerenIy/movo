//get html elements
document.getElementById("search").addEventListener("click", callMovies);
let movie = document.getElementById("output");
let type = document.getElementById("input");

let images = document.getElementById("img");

//when page loads begin slide
window.addEventListener("DOMContentLoaded", imageSlide);

//function for calling movie api
function callMovies() {
  //store api information in  a variable
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0c61322343mshe5386bc17e61688p19e553jsnd4d160510343",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  //fetch api
  fetch("https://imdb-top-100-movies.p.rapidapi.com/", options)
    .then((response) => response.json())
    .then((data) => {
      //get the genre value from user input
      answer = type.value;
      //for each item in the movie list display the following information
      data.forEach((item) => {
        //check user input with movie genre
        //if they are the same then display it
        if (item.genre == answer) {
          output += `
            <div class = 'grid card'>
            <img src = '${item.thumbnail}' class = 'movie-img'>
            <br>
            <h4 class = 'moive-title' > ${item.title}</h4>
            <span class = 'movie-span' >${item.genre}</span>
            <span class = 'movie-span' >${item.rating}</span>
            </div>
        `;
        }
      });

      //display the movie info here
      movie.innerHTML = output;
    })

    //error message
    .catch((err) => console.error(err));
}

function imageSlide() {
  let slider = () => {
    const items = [
      "images/dune.jpg",
      "images/image1jpg",
      "images/image2.jpg",
      "images/inage3.jpg",
      "images/image4.jpg",
      "images/image5.jpg",
      "images/image6.jpg",
    ];

    for (let i = 0; i < items.length; i++) {
      images.src = items[i];
    }
  };

  setInterval(slider, 1500);
}
