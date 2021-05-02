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

/**
 * Method that checks directory´s files.
 * @param route Route where the directory is.
 */
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

/**
 * Method that checks file´s content.
 * @param route Route where the file is.
 */
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
    console.error(chalk.red(`${route} route, doesn´t exists!`));
  }
}

/**
 * Method that remove a file or a directory
 * @param route Route where the file is
 * @param type Type of file
 */
export function remove(route: string, type: string) {
  const existFile: boolean = fs.existsSync(`${route}`);

  if (existFile == true) {
    if (type == "file") {
      fs.rmSync(route);
      console.log(chalk.green(`${route} file, has been removed!`));
    } else if (type == "directory") {
      const rm = spawn('rm', ['-rf', route]);
      rm.on('close', () => {
        console.log(chalk.green(`${route} directory, has been removed!`));
      });
    }
  } else {
    console.error(chalk.red(`${route} route, doesn´t exists!`));
  }
}

/**
 * Method that moves a file or a directory to another route
 * @param routeO Initial file route
 * @param routeF Final file route
 * @param option Type of move (move or copy)
 */
export function move(routeO: string, routeF: string, option: string) {
  const existFileO: boolean = fs.existsSync(`${routeO}`);
  const existFileF: boolean = fs.existsSync(`${routeF}`);

  if (existFileO == true && existFileF == true) {
    switch (option) {
      case 'move':
        const mv = spawn('mv', [routeO, routeF]);
        mv.on('close', () => {
          console.log(chalk.green(`File ${routeO} has been moved!`));
        });
        break;
      case 'copy':
        const cp = spawn('cp', [routeO, routeF]);
        cp.on('close', () => {
          console.log(chalk.green(`File ${routeO} has been copied!`));
        });
        break;
    }
  } else {
    if (existFileO == true && existFileF == false) {
      console.error(chalk.red(`${routeF} route, doesn´t exists!`));
    } else {
      console.error(chalk.red(`${routeO} route, doesn´t exists!`));
    }
  }
}
