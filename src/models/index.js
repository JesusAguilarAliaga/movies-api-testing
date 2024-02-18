const Actor = require("./Actor.js");
const Director = require("./Director.js");
const Genre = require("./Genre.js");
const Movie = require("./Movie.js");



// table pivot: movie_genre
Movie.belongsToMany(Genre, { through: "movieGenre"})
Genre.belongsToMany(Movie, { through: "movieGenre"})

// table pivot: movie_director
Movie.belongsToMany(Director, { through: "movieDirector"})
Director.belongsToMany(Movie, { through: "movieDirector"})

// table pivot: movie_actor
Movie.belongsToMany(Actor, { through: "movieActor"})
Actor.belongsToMany(Movie, { through: "movieActor"})