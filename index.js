document.addEventListener('DOMContentLoaded', function () {
    // code here will execute after the document is loadedq
    const myForm = document.getElementById('search-form');
    myForm.addEventListener('submit', function (e) {
        // event listener code goes here
        e.preventDefault()
        const searchString = document.querySelector("#searchbar").value
        const urlEncodedSearchString = encodeURIComponent(searchString);





        axios.get("http://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString)
            .then(Response => {
                if (Response.data.Error){
                    alert(Response.data.Error) 
                    return false
                }
                movieData = Response.data.Search
                const container = document.querySelector('.results')
                container.innerHTML = renderMovies(Response.data.Search)
            })



    })

});
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
function saveToWatchList(imdbID) {
    console.log(imdbID)
    let movie = movieData.find(currentmovie => {
        // console.log(currentmovie)
        return currentmovie.imdbID == imdbID


    })
    console.log(movie)
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    if (watchlist == null) { watchlist = [] }
    watchlist.push(movie)

    watchlistJSON = JSON.stringify(watchlist);

    localStorage.setItem('watchlist', watchlistJSON);




}
