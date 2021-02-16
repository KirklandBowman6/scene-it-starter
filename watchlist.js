
function renderMovies(movieArray) {
    const movieHtmlArray = movieArray.map((currentmovie) => {
        return `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card w-100 mb-5">
        <img src="${currentmovie.Poster}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${currentmovie.Title}</h5>
        <p class="card-text"> ${currentmovie.Year} 
        
        
        
        </p>
        <a href="#" onclick = "saveToWatchList('${currentmovie.imdbID}')" class="btn btn-danger">Add To Piratelist</a>
        </div>
        </div>
        </div>`
    })
    
    
    return movieHtmlArray.join("")
}
document.addEventListener("DOMContentLoaded", () => {
    
    const watchlist = localStorage.getItem('watchlist');
    console.log(watchlist)
    var parselist = JSON.parse(watchlist)
    console.log(parselist)
    const moviecontainer = document.querySelector(".results")
    moviecontainer.innerHTML = renderMovies(parselist)
})