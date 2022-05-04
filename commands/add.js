const add = {
  callback: (message, ...args) => {
    let sum = 0;

    args.forEach((arg) => {
      sum += Number(arg);
    });

    message.reply(`The sum is ${sum}`);
  },
};

export default add;
