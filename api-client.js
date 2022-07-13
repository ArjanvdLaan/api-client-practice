// import fetch from "node-fetch";

async function getMovieGenres() {
    try {
        const apiUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=0e6d369627e7fc4ce789d447b9c3e161";
        const response = await fetch(apiUrl);
        // console.log(response);
        const returnValue = await response.json();
        // console.log(returnValue);
        return returnValue;
    } catch (error) {
        console.error("Error: " + error);
    }
}

async function awaitMovieGenres() {
    const genres = await getMovieGenres();
    
    // solution 1
    // const genresArray = Array.from(genres);
    // console.log(genresArray);

    // solution 2
    // console.log(Object.keys(genres))

    // solution 3
    // for (let key in element) {
    //     console.log(`${key} : ${element[key]}`);
    // }

    genres.map(e => {
        // let getUl = document.getElementById('list');
        // let newLi = document.createElement("li");
        // getUl.append(newLi);
        // newLi.innerHTML = e;
        console.log(e);
    })
}

awaitMovieGenres();


