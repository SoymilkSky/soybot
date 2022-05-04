export default {
  callback: (message, ...args) => {
    console.log(args);
    message.reply('pong');
  },
};
