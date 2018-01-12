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
            /*console.log(movieInfo);*/
            const genresInfo = movieInfo.genres;
            
            movieContainer.append(`
                    
                    <li>
                        <img src='${imgUrl}'>
                        <h1>
                            Tytuł:
                        </h1>
                        <h2>
                            ${movieInfo.title}
                        </h2>
                        <p class="red">
                            Data publikacji: <b>${movieInfo.release_date}</b>
                        </p>
                        <p>
                            Popularność: <b>${movieInfo.popularity}</b>
                        </p>
                        <p>
                            Liczba głosów: <b>${movieInfo.vote_count}</b>
                        </p>
                        <p>
                            Średnia ocena z głosów: <b>${movieInfo.vote_average}</b>
                        </p>
                    </li>
                
                
            `);
            movieContainer.append(`
                <h3>
                    Kategorie:
                </h3>
            `);
            
            for (let i = 0; i < genresInfo.length; i++) {
                const genList = genresInfo[i];
                console.log(genList);
                movieContainer.append(`
                    <p class="toggle">
                        ${genList.name}
                    </p>
                `);
            };
            movieContainer.append(`
                <a href="http://www.imdb.com/find?ref_=nv_sr_fn&q=${movieInfo.title}&s=all">
                    Link
                </a>
                <h4>
                    Opis: 
                </h4>
                <p>
                    ${movieInfo.overview}
                </p>
                <h4>
                    Kraj produkcji: 
                </h4>
            `);
            const listOfCountries = movieInfo.production_countries;
            for (let y = 0; y < listOfCountries.length; y++) {
                const countryList = listOfCountries[y];
                console.log(countryList);
                movieContainer.append(`
                    <p class="toggle">
                        ${countryList.name}
                    </p>
                `);
            };
            movieContainer.append(`
                <h4>
                    Firmy produkcyjne: 
                </h4>
            `);  
            const listOfCompanies = movieInfo.production_companies;
            for (let y = 0; y < listOfCompanies.length; y++) {
                const companiesList = listOfCompanies[y];
                console.log(companiesList);
                movieContainer.append(`
                    <p class="toggle">
                        ${companiesList.name}
                    </p>
                `);
            };
            
/*            $(".ik").mouseover(() => {
                $('.red').hide();
            })*/
            console.log(movieContainer);
        };
        let searchInfo = () => {
            
            $.ajax({
                url: urlInfo + itemID + "?api_key=" + API_KEY + "&language=en-US",
                method: "GET",
                success: showMovieInfo
            });
        };
        searchInfo();
        
        
        
        
    };
    const showMovie = movie => {
        
        movieContainer.empty();
        let allMovies = movie.results;
        allMovies.forEach(item => generateResponse(item));
    };
    

    

   
    
    
        
});