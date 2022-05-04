import PokedexEntry from '../models/pokedex.js';

const pokedexCommands = {
  addEntry: async (entry) => new PokedexEntry(entry).save(),
  getPokedex: async (userId) => PokedexEntry.find({ userId }),
  removeEntry: async (userId, entry) => PokedexEntry.deleteMany({ userId, entry }),
};

export default pokedexCommands;
