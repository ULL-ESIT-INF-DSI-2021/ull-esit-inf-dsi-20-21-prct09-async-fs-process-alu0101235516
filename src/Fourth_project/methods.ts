import * as fs from 'fs';
import * as chalk from 'chalk';
import {spawn} from 'child_process';

/**
 * Method that checks if a provided route its a directory or a file.
 * @param route route to check.
 */
export function checker(route: string) {
  const existRoute: boolean = fs.existsSync(`${route}`);

  if (existRoute == true) {
    fs.open(route, fs.constants.O_DIRECTORY, (err) => {
      if (err) {
        console.log(chalk.red(`[${route}], its a file.`));
      } else {
        console.log(chalk.green(`[${route}], its a directory.`));
      }
    });
  } else {
    console.error(chalk.red(`${route} route, doesnt exists!`));
  }
}

/**
 * Method for create a directory
 * @param route Route where the directory will be created
 * @param dirName Directory´s name
 */
export function mkdir(route: string, dirName: string) {
  const existRoute: boolean = fs.existsSync(`${route}`);
  const existDir: boolean = fs.existsSync(`${route}/${dirName}`);

  if (existRoute == true && existDir == false) {
    fs.mkdirSync(`${route}/${dirName}`);
    console.log(chalk.green(`${dirName} directory, created!`));
  } else {
    if (existRoute == false) {
      console.error(chalk.red(`${route} route, doesnt exists!`));
    } else {
      console.error(chalk.red(`${dirName} directory, already exists!`));
    }
  }
}

export function ls(route: string) {
  const existRoute: boolean = fs.existsSync(`${route}`);

  if (existRoute == true) {
    fs.open(route, fs.constants.O_DIRECTORY, (err) => {
      if (err) {
        console.log(chalk.red(`[${route}], its a file.`));
      } else {
        const ls = spawn('ls', [route]);
        ls.stdout.pipe(process.stdout);
      }
    });
  } else {
    console.error(chalk.red(`${route} route, doesnt exists!`));
  }
}

export function cat(route: string) {
  const existRoute: boolean = fs.existsSync(`${route}`);

  if (existRoute == true) {
    fs.open(route, fs.constants.O_DIRECTORY, (err) => {
      if (err) {
        const cat = spawn('cat', [route]);
        cat.stdout.pipe(process.stdout);
      } else {
        console.log(chalk.red(`[${route}], its a directory.`));
      }
    });
  } else {
    console.error(chalk.red(`${route} route, doesnt exists!`));
  }
}

export function remove(route: string, type: string) {
  const existFile: boolean = fs.existsSync(`${route}`);

  if (existFile == true) {
    if (type == "file") {
      fs.rmSync(route);
      console.log(chalk.green(`${route} file, has been remove!`));
    } else if (type == "directory") {
      fs.rmdirSync(route);
      console.log(chalk.green(`${route} directory, has been remove!`));
    }
  } else {
    console.error(chalk.red(`${route} route, doesnt exists!`));
  }
}
