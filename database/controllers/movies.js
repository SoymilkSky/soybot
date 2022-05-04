import Movie from '../models/movies.js';

const movieCommands = {
  save: (data) => new Movie({ movieName: data.movieName, watched: false }).save(),
  getAll: (userId) => Movie.find({ userId }),
  update: (query) => Movie.updateOne(
    { userId: query.userId, movieName: query.movieName },
    { $set: { watched: query.watched } },
  ),
};

export default movieCommands;
