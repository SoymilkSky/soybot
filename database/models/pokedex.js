import mongoose from 'mongoose';

const pokedexEntrySchema = mongoose.Schema({
  userId: Number,
  name: String,
  pokeData: Array,
});

const PokedexEntry = mongoose.model('PokedexEntry', pokedexEntrySchema);

export default PokedexEntry;
