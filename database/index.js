import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(`mongodb+srv://soymilksky:${process.env.MONGODB_PASSWORD}@pokedex.x4qck.mongodb.net/Pokedex?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', () => {
  console.log('MongoDB Atlas connection error');
});

db.once('open', () => {
  console.log('MongoDB Atlas connected successfully');
});

export default db;
