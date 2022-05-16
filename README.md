# soybot

<div align="center" width="100%">
  <img src="https://img.shields.io/badge/Discord.js-grey?style=for-the-badge&logo=discord" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" />
</div>

<h4 align="center">A discord bot with many features</h4>

## Motivation and Story
Given the task to build an app in two days, I decided on building a discord bot I could use with my group of friends. 

## Features

### PokeAPI Integration


Pokemon Lookup             |  Random Pokemon           
:-------------------------:|:-------------------------:
![pokemon-lookup](https://i.imgur.com/ADvag68.png)  |  ![random pokemon](https://i.imgur.com/TCX4Bni.png)

User Pokedex               |  Remove Pokemon  
:-------------------------:|:-------------------------:
![pokedex](https://i.imgur.com/q3IpK0d.png)  |  ![remove-pokemon](https://i.imgur.com/WM05Gl1.png)

<b>Features</b>
- /pokemon `pokemon_name`
  - Allows you to search for a pokemon
  - Results in an embed response that shows that pokemon and some basic information about it
- /randomPokemon
  - Responds with a random pokemon out of all available pokemon on the PokeAPI
  - Allows you to add the pokemon to your pokedex
    - Stores the pokemon into MongoDB Atlas per user
- /pokedex
  - Replies with an embed showing the user all the pokemon they've added to their pokemon from the /randomPokemon command
- /removePokemon `pokemon_name`
  - Removes that pokemon from the user's pokedex
  - Has a confirmation/cancel buttons to make sure user wants to remove that pokemon

### TMDB API Integration
<img src="https://i.imgur.com/ne3lF1b.png" />
  
<b>Features</b>
- /findMovie `name_of_movie`
  - Looks up a movie, if it exists on TMDB's database, will respond with an embed containing the information about that movie

### Other fun commands
- /add `num1` `num2`
- /eggplant `string`
- /fire `string`
- /bat `string`
- /strawberry `string`

## Code Styles
This project follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

## Tech Stack
**Built with**
- [Discord.js](https://discord.js.org/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [Mongoose](https://mongoosejs.com/)
- [PokeAPI](https://pokeapi.co/)
- [TMDB API](https://developers.themoviedb.org/)

## Instructions for how to deploy the application:

Fork this repo into your local machine

Follow the discord.js [guide for creating your bot](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) and [adding your bot to a server](https://discordjs.guide/preparations/adding-your-bot-to-servers.html) in order to get the token and clientId required for the next section.

Create a .env file fill it with the following:

token=(discord application token from your discord developer portal)
clientId=(clientId from your discord developer portal)

guildId=(id of the discord server you want to use this bot in)

MONGODB_USER=(username for your mongoDB atlas account)
MONGODB_PASSWORD=(password for your mongoDB atlas account)

TMDB_KEY=(your API key from TMDB)
  
After finishing your .env file, in terminal run the command `npm run start` and you will now be hosting the bot on your local machine.
