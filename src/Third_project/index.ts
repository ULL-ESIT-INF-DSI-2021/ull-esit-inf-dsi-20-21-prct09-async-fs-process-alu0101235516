import * as fs from 'fs';
import * as chalk from 'chalk';
import yargs = require("yargs");

/**
 * Method for check any changes on user´s directory.
 * @param route database route
 * @param username user name
 */
function watch(route: string, username: string) {
  const existRoute: boolean = fs.existsSync(`${route}/${username}`);
  const dir: string = `${route}/${username}`;
  const file = fs.readdirSync(dir);

  if (existRoute == true) {
    console.log(chalk.blue(`This it´s the initial content in the direcotry: \n` + file + '\n'));

    fs.watch(dir, (event, trigger) => {
      console.log('The directory as changed!');
      switch (event) {
        case 'rename':
          const existFile: boolean = fs.existsSync(`${route}/${username}/${trigger}`);
          if (existFile == true) {
            console.log(chalk.green('File ' + trigger + ' has been added!\n'));
          } else {
            console.log(chalk.green('File ' + trigger + ' has been removed!\n'));
          }
          break;
        case 'change':
          console.log(chalk.green('There was a change at ' + trigger + '\n'));
          break;
      }

      const file = fs.readdirSync(dir);
      console.log(chalk.blue(`The directory now contains: \n` + file + '\n'));
    });
  } else {
    console.error(chalk.red(`${route} route, doesn´t exists!`));
  }
}

/**
 * Comand watch.
 */
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
