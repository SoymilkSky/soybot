import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
  userId: Number,
  movieData: Array,
});

const Movie = mongoose.model('MovieEntry', movieSchema);

export default Movie;
