import * as yargs from 'yargs';
import {checker, mkdir, ls, cat, remove, move} from './methods';

/**
 * Check comand.
 */

yargs.command( {
  command: 'check',
  describe: 'Check if user route its a directory or a file',
  builder: {
    route: {
      describe: 'Main route',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.route === "string") {
      checker(argv.route);
    }
  },
});

/**
 * Mkdir comand.
 */
yargs.command( {
  command: 'mkdir',
  describe: 'Create a new directory',
  builder: {
    route: {
      describe: 'Main route',
      demandOption: true,
      type: 'string',
    },
    dirName: {
      describe: 'Directory´s name',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.route === "string" && typeof argv.dirName === "string") {
      mkdir(argv.route, argv.dirName);
    }
  },
});

yargs.command( {
  command: 'ls',
  describe: 'List a directory´s files',
  builder: {
    route: {
      describe: 'Main route',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.route === "string") {
      ls(argv.route);
    }
  },
});

yargs.command( {
  command: 'cat',
  describe: 'List a directory´s files',
  builder: {
    route: {
      describe: 'Main route',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.route === "string") {
      cat(argv.route);
    }
  },
});

yargs.command( {
  command: 'remove',
  describe: 'List a directory´s files',
  builder: {
    route: {
      describe: 'Main route',
      demandOption: true,
      type: 'string',
    },
    type: {
      describe: 'Main route',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.route === "string" && typeof argv.type === "string") {
      remove(argv.route, argv.type);
    }
  },
});

yargs.command( {
  command: 'move',
  describe: 'List a directory´s files',
  builder: {
    routeO: {
      describe: 'original route',
      demandOption: true,
      type: 'string',
    },
    routeF: {
      describe: 'final route',
      demandOption: true,
      type: 'string',
    },
    type: {
      describe: 'Comand type',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.routeO === "string" && typeof argv.routeF === "string" && typeof argv.type === "string") {
      move(argv.routeO, argv.routeF, argv.type);
    }
  },
});

yargs.argv;
