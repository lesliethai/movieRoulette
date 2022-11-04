// Stretch goal: add ability to search movies database/library for movies

// create app object 
const movie = {}; 

// init method
movie.init = () => {
    movie.userSearch();  
}  

// apiKey and url
movie.apiKey = `k_z8o3ltcf`; 
movie.searchInput = document.querySelector('.searchInput');

// api call
movie.movieSearch = (q) => {
    movie.baseUrl = new URL(`https://imdb-api.com/en/API/SearchMovie/`);
    // add search params to base url 
    movie.baseUrl.search = new URLSearchParams({
        apiKey: movie.apiKey, 
        expression: movie.searchInput.value,
    });
    fetch(movie.baseUrl)
        .then(res => res.json())
        .then(response => {
            movie.displaySearch(response.results); 
        });
}

// append on page
movie.displaySearch = (array) => {
    // selectors
    const movieUl = document.querySelector('.movieUl');
    movieUl.innerHTML = ``; 

    array.forEach(item => {
        // create li
        const movieContainer = document.createElement(`li`);

        // create img & title
        const image = document.createElement('img');
        image.src = item.image;
        image.alt = `Poster for ${item.title}`;

        const title = document.createElement('p');
        title.textContent = item.title;

        // append to li
        movieContainer.appendChild(image);
        movieContainer.appendChild(title);
        
        // append to ul
        movieUl.appendChild(movieContainer); 
    })
}

// get user input 
movie.userSearch = () => {
    // search input selector
    const submitButton = document.querySelector('.submitSearchBtn');
    const movieTitleDisplay = document.querySelector('.movieTitleDisplay');
    const movieDisplayP = document.querySelector('.movieDisplayP');

    // get search input value
    submitButton.addEventListener('click', function(e){
        e.preventDefault();
        movie.movieSearch();
        movieDisplayP.classList.remove('displayNone'); 
        movieTitleDisplay.textContent = movie.searchInput.value;
        movie.searchInput.value = "";
    })
}

movie.init();
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