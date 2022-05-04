import mongoose from 'mongoose';

const pokedexEntrySchema = mongoose.Schema({
  userId: Number,
  pokeData: Array,
});

const PokedexEntry = mongoose.model('PokedexEntry', pokedexEntrySchema);

export default PokedexEntry;
