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
            movie.displaySentence(response.results);
        })
        .catch((err) => {
            console.log('error:', err.message);
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

// display search or error sentence
movie.displaySentence = (array) => {
    const error = document.querySelector('.error');
    const movieDisplayP = document.querySelector('.movieDisplayP');

    if (array.length > 0) {
        error.classList.add('displayNone');
        movieDisplayP.classList.remove('displayNone');

    } else if (array.length === 0) {
        error.classList.remove('displayNone');
        movieDisplayP.classList.add('displayNone');
    }
}

// get user input 
movie.userSearch = () => {
    // search input selector
    const submitButton = document.querySelector('.submitSearchBtn');
    const movieTitleDisplay = document.querySelector('.movieTitleDisplay');
    const errorDisplay = document.querySelector('.errorDisplay');


    // get search input value
    submitButton.addEventListener('click', function(e){
        e.preventDefault();
        movie.movieSearch();
        movieTitleDisplay.textContent = movie.searchInput.value;
        errorDisplay.textContent = movie.searchInput.value;
        movie.searchInput.value = "";
    })
}


movie.init();
