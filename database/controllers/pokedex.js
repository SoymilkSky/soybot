import PokedexEntry from '../models/pokedex.js';

const pokedexCommands = {
  addEntry: async (entry) => new PokedexEntry(entry).save(),
  getPokedex: async (userId) => PokedexEntry.find({ userId }),
  removeEntry: async (userId, name) => PokedexEntry.deleteMany({ userId, name }),
};

export default pokedexCommands;
