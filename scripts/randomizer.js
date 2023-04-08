// MVP: query the imdb-api.com API for selected queries to generate random movie titles based on filter selected


// Create an app object
const movie = {};

// Create an init method to setup the application
movie.init = () => { 
    movie.displayMovie(); 
    movie.getSelectedMovie();
} 

movie.apiKey = `k_z8o3ltcf`;
movie.url = `https://imdb-api.com/en/API/MostPopularMovies/${movie.apiKey}`;


// Create a method (getSelectedMovie) to make API calls, which takes the user selection as a parameter, when user makes selection it generates random movie
movie.getSelectedMovie = () => { 
    fetch(movie.url)
        .then(res => res.json())
        .then(response => {  
            movie.returnedMovies = response.items;     
            movie.generateMovie(); 
        })
        .catch((err) => {
            console.log('error:', err.message);
        }); 
}

// randomize film
movie.randomizeMovie = (film) => { 
    const randomMovie = film[Math.floor(Math.random() * film.length)]; 
    return randomMovie
}

// generate and append to page
movie.generateMovie = () => {
    // retrieve data (titles, description, etc)
    const randoMovie = movie.randomizeMovie(movie.returnedMovies);
    const title = randoMovie.title; 
    const year = randoMovie.year;
    const poster = randoMovie.image;
    // append information to page
    const titleDisplay = document.querySelector('.title');
    const yearDisplay = document.querySelector('.yearOfRelease');
    const imageDisplay = document.querySelector('.poster');


    titleDisplay.textContent = `${title} `; 
    yearDisplay.textContent = `${year}`;
    imageDisplay.src = `${poster}`; 
    imageDisplay.alt = `${title} poster`
}

// generate on click
movie.displayMovie = () => {
    const randomizeBtn = document.querySelector('.randomizeBtn');

    randomizeBtn.addEventListener('click', function(e){
        e.preventDefault();
        movie.generateMovie(movie.returnedMovies); 
    }); 
} 

movie.init(); 