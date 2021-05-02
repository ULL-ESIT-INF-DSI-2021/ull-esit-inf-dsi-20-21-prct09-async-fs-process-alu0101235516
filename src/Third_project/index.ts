import * as fs from 'fs';
import * as chalk from 'chalk';
import yargs = require("yargs");

function watch(route: string, username: string) {
  const dir: string = `${route}/${username}`;
  const file = fs.readdirSync(dir);

  console.log(chalk.blue(`This it´s the initial content in the direcotry: \n` + file + '\n'));

  fs.watch(dir, (event, trigger) => {
    console.log('The directory as changed!');
    switch (event) {
      case 'rename':
        console.log(chalk.green('File ' + trigger + ' has been added or removed!\n'));
        break;
      case 'change':
        console.log(chalk.green('There was a change at ' + trigger + '\n'));
        break;
    }

    const file = fs.readdirSync(dir);
    console.log(chalk.blue(`The directory now contains: \n` + file + '\n'));
  });
}

yargs.command( {
  command: 'watch',
  describe: 'Watch directory´s files changes',
  builder: {
    route: {
      describe: 'Main route',
      demandOption: true,
      type: 'string',
    },
    username: {
      describe: 'User name',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.route === "string" && typeof argv.username === "string") {
      watch(argv.route, argv.username);
    }
  },
});

yargs.argv;
