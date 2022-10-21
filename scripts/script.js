// MVP: query the imdb-api.com API for selected queries to generate random movie titles based on filter selected
// Stretch goal: add ability to search movies database/library for movies

// Create an app object (movieGenerator)
const movie = {};

// Create an init method to setup the application
movie.init = () => { 
    movie.getSelectedMovie();
    movie.randomizeMovie(); 
    movie.generateMovie(); 
} 
// k_3socm0b3 k_z8o3ltcf  
movie.apiKey = `k_z8o3ltcf`;
movie.url = `https://imdb-api.com/en/API/MostPopularMovies/${movie.apiKey}`;


// Create a method (getSelectedMovie) to make API calls, which takes the user selection as a parameter, when user makes selection it generates random movie
movie.getSelectedMovie = () => { 
    fetch(movie.url)
        .then(res => res.json())
        .then(response => {
            // console.log(data.items[0].fullTitle);     
            movie.randomizeMovie(response.items);
            movie.generateMovie(response.items);  
        }); 
}

// randomize film
movie.randomizeMovie = (film) => {
    // console.log(film, '31'); 
    const randomMovie = film[Math.floor(Math.random() * film.length)]; 
    // console.log(randomMovie); 
    return randomMovie 
}

movie.generateMovie = (data) => {
    const randoMovie = movie.randomizeMovie(data); 
    const title = randoMovie.fullTitle; 
    console.log(title);  
}

// console.log(movie.randomizeMovie); 
/*
// Initialize preset data in the dedicated properties
// - apiURL : https://imdb-api.com/en/API/
// - apiKey: k_z8o3ltcf

// write a method that gets the data from the API

// When the API call is successful, display the result by appending the data to the page
// Clear old selection when you click again
// If the API call fails, display an error message
// Create default message to tell user to select something


*/
movie.init(); 