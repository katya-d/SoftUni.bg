function movies(arrayData) {
  class Movie {
    constructor(name = "", director, date) {
      this.name = name;
      this.director = director;
      this.date = date;
    }
  }

  let movies = [];
  let newMovie = new Movie();

  for (let i = 0; i < arrayData.length; i++) {
    let line = arrayData[i];

    if (line.includes("addMovie")) {
      line = line.split("addMovie ");
      let movieName = line[1];
      newMovie = new Movie(movieName);
      movies.push(newMovie);
    } else if (line.includes("directedBy")) {
      line = line.split(" directedBy ");
      let movieName = line[0];
      let director = line[1];

      for (let j = 0; j < movies.length; j++) {
        let movie = movies[j];

        for (let [key, value] of Object.entries(movie)) {
          if (value === movieName) {
            movie["director"] = director;
          }
        }
      }
    } else if (line.includes("onDate")) {
      line = line.split(" onDate ");
      let movieName = line[0];
      let date = line[1];

      for (let j = 0; j < movies.length; j++) {
        let movie = movies[j];

        for (let [key, value] of Object.entries(movie)) {
          if (value === movieName) {
            movie["date"] = date;
          }
        }
      }
    }
  }
  for (let movie of movies) {
    if (movie['director'] !== undefined && movie['date'] !== undefined) {
      let movieString = JSON.stringify(movie);
      console.log(movieString);
    }
  }
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
console.log("--------------");
movies([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
