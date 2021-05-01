import * as fs from 'fs';
import * as chalk from 'chalk';
import {spawn} from 'child_process';

export function info(fileName: string, option: string) {
  const existDirectory: boolean = fs.existsSync(`src/Second_project/Text_notes/${fileName}`);

  if (existDirectory == true) {
    const wc = spawn('wc', [`src/Second_project/Text_notes/${fileName}`]);
    let wcOutput = '';
    wc.stdout.on('data', (piece) => wcOutput += piece);

    wc.on('close', () => {
      const wcOut = wcOutput.split(/\s+/);
      switch (option) {
        case 'lines':
          console.log(chalk.green(`File ${fileName} has ${parseInt(wcOut[1]) + 1} lines`));
          break;
        case 'words':
          console.log(chalk.green(`File ${fileName} has ${wcOut[2]} words`));
          break;
        case 'characters':
          console.log(chalk.green(`File ${fileName} has ${wcOut[3]} characters`));
          break;
      }
    });
  } else {
    console.error(chalk.red(`${fileName} note, doesnt exists!`));
  }
}

export function infoPipe(fileName: string, option: string) {
  const existDirectory: boolean = fs.existsSync(`src/Second_project/Text_notes/${fileName}`);

  if (existDirectory == true) {
    const wc = spawn('wc', [`src/Second_project/Text_notes/${fileName}`]);
    const echo = spawn('echo', [`src/Second_project/Text_notes/${fileName}`]);
    echo.stdout.pipe(process.stdout);

    let wcOutput = '';
    wc.stdout.on('data', (piece) => wcOutput += piece);

    wc.on('close', () => {
      const wcOut = wcOutput.split(/\s+/);
      switch (option) {
        case 'lines':
          console.log(chalk.green(`File ${fileName} has ${parseInt(wcOut[1]) + 1} lines`));
          break;
        case 'words':
          console.log(chalk.green(`File ${fileName} has ${wcOut[2]} words`));
          break;
        case 'characters':
          console.log(chalk.green(`File ${fileName} has ${wcOut[3]} characters`));
          break;
      }
    });
  } else {
    console.error(chalk.red(`${fileName} note, doesnt exists!`));
  }
}
