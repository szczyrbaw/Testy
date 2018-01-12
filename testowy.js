const generateResponse = item => {
        songsContainer.append(`
            <li>
                <p>
                    ${item.title}<br>
                </p>
                <img src='${item}/kHXEpyfl6zqn8a6YuozZUujufXf.jpg'>
            </li>
        


        `)
    };
    
    const showSongs = song => {
        songsContainer.empty();
        let allSongs = song.results;
        allSongs.forEach(item => generateResponse(item));
    };

   /*let showMovie = (resp) => {
        
        console.log(resp);
        movieContainer.empty();
        let allMovies = resp.results;
        const imgUrl = 'https://image.tmdb.org/t/p/w300';
        console.log(allMovies.length);
        
        for (let i = 0; i <= allMovies.length; i++) {
            movieContainer.append("<img src='" + imgUrl + allMovies[i].poster_path + "'>");
            movieContainer.append("<li>" + allMovies[i].title + "</li>");
            movieContainer.append("<li>" + allMovies[i].release_date + "</li>");
            movieContainer.append("<li>" + allMovies[i].popularity + "</li>");
            movieContainer.append("<li>" + allMovies[i].vote_count + "</li>");
            movieContainer.append("<li>" + allMovies[i].vote_average + "</li>");
        }
        
        
    };*/

        /*const checkGenre = data => {

            let allGenres = data.genres;
            let allGenresFromMovie = item.genre_ids;
            for (let i = 0; i < allGenres.length; i++) {
              console.log(allGenres[i].id);
                for (let y = 0; y < allGenresFromMovie.length; y++) {
//                    console.log(allGenresFromMovie[y]);
                    //console.log("jest");
                    let genresIdFromMovie = allGenresFromMovie[y].id;
                    
//                    for (let g = 0; g < genresIdFromMovie.length; g++ ) {
//                        console.log(genresIdFromMovie[g]);
//                    }
                    
                    /*if(allGenres[i].id === allGenresFromMovie[y].id) {
                        console.log(allGenres[i].name);
                    }
                    
                    
                }
                
            };
            
            
            

        }*/





$(document).ready(function(){
    
    const API_KEY = "c4e00b6f4cfacc64db0313847c250756";
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=';
    const urlInfo = 'https://api.themoviedb.org/3/movie/';
    
    
    let searchMovie = () => {
        let search = $("#search").val();
        if(!search.length) search = "Shrek";
        $.ajax({
            url: url + API_KEY + "&query=" + search,
            method: "GET",
            success: showMovie
        });
    };
    const gen = $('#gen');
    let movieContainer = $("#movies");
    $("#runSearch").click(searchMovie);
    $("#search").keypress( (e) => {
        if (e.which === 13) {
            searchMovie();
        };
    });

    const generateResponse = item => {
        const imgUrl = `https://image.tmdb.org/t/p/w300${item.poster_path}`;

        let itemID = item.id;

        const showMovieInfo = movieInfo => {
            console.log(movieInfo);

            allMoviesInfo.forEach(itemInfo => generateResponseInfo(itemInfo));
        };
        let searchInfo = () => {
            
            $.ajax({
                url: urlInfo + itemID + "?api_key=" + API_KEY + "&language=en-US",
                method: "GET",
                success: showMovieInfo
            });
        };
        searchInfo();
        
        const generateResponseInfo = itemInfo => {
            movieContainer.append(`
                <li>
                    <img src='${imgUrl}'>
                    <h1>
                        Tytuł: ${item.title}
                    </h1>
                    <p>
                        Data publikacji: <b>${item.release_date}</b>
                    </p>
                    <p>
                        Popularność: <b>${item.popularity}</b>
                    </p>
                    <p>
                        Liczba głosów: <b>${item.vote_count}</b>
                    </p>
                    <p>
                        Średnia ocena z głosów: <b>${item.vote_average}</b>
                    </p>

                </li>
            `);
        };
        
        
    };
    const showMovie = movie => {
        
        movieContainer.empty();
        let allMovies = movie.results;
        allMovies.forEach(item => generateResponse(item));
    };
    

    

   
    
    
        
});
