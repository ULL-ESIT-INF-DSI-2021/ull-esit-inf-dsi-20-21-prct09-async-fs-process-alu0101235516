import * as yargs from 'yargs';
import {info} from './method';

yargs.command( {
  command: 'wc',
  describe: 'Lines, words and characters count',
  builder: {
    file: {
      describe: 'Main file',
      demandOption: true,
      type: 'string',
    },
    firstOption: {
      describe: 'User option',
      demandOption: false,
      type: 'string',
    },
    secondOption: {
      describe: 'User option',
      demandOption: false,
      type: 'string',
    },
    thirdOption: {
      describe: 'User option',
      demandOption: false,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.file === "string") {
      if (typeof argv.firstOption === "string" && argv.secondOption == null && argv.thirdOption == null) {
        info(argv.file, argv.firstOption);
      }
      if (typeof argv.firstOption === "string" && typeof argv.secondOption === "string" && argv.thirdOption == null) {
        info(argv.file, argv.firstOption);
        info(argv.file, argv.secondOption);
      }
      if (typeof argv.firstOption === "string" && typeof argv.secondOption === "string" && typeof argv.thirdOption === "string") {
        info(argv.file, argv.firstOption);
        info(argv.file, argv.secondOption);
        info(argv.file, argv.thirdOption);
      }
    }
  },
});

yargs.argv;
