import {Note} from '../Notes/note';
import * as fs from 'fs';
import * as chalk from 'chalk';

/**
 * Clase User, la cual la usaremos para verificar el usuario, y para almacenar todos los métodos de nuestra aplicación
 * ya que desde aqui, podremos acceder a cada usuario individualmente
 */
export class User {
  private userNotes: Note[] = [];
  /**
   * Constructor de la clase
   * @param username nombre de usuario, del usuario correspondiente
   */
  constructor(private username: string) {
    const existDirectory: boolean = fs.existsSync(`src/Database/${this.username}`);
    if (existDirectory == false) {
      fs.mkdir(`src/Database/${this.username}`, () => {
        console.log(chalk.green('New User Directory created!'));
      });
    }
  }

  /**
   * Acceso al nombre del usuario.
   * @returns el nombre del usuario
   */
  getUsername(): string {
    return this.username;
  }
  /**
   * Cambiar el nombre de usuario.
   * @param newUsername el nuevo nombre de usuario.
   */
  setUsername(newUsername: string): void {
    this.username = newUsername;
  }

  /**
   * Método para acceder a las notas de un usuario
   * @returns las notas del usuario en forma de array
   */
  getNotes() {
    return this.userNotes;
  }


  /**
   * Método para añadir una nueva nota al usuario.
   * @param title titulo de la nota.
   * @param body contenido de la nota.
   * @param color color de la nota.
   */
  public addNote(title: string, body: string, color: 'red' | 'blue' | 'yellow' | 'green') {
    const existFile: boolean = fs.existsSync(`src/Database/${this.username}/${title}.json`);

    if (existFile == false) {
      this.userNotes.push(new Note(title, body, color));
      fs.writeFile(`src/Database/${this.username}/${title}.json`, `${jsonFormat(title, body, color)}`, () => {
        console.log(chalk.green('New note added!'));
      });
    } else {
      console.error(chalk.red(`${title} note, already exists!`));
    }
  }


  /**
   * Método para eliminar una nota existente del usuario.
   * @param title titulo de la nota.
   */
  public removeNote(title: string) {
    const existFile: boolean = fs.existsSync(`src/Database/${this.username}/${title}.json`);

    if (existFile == true) {
      fs.rm(`src/Database/${this.username}/${title}.json`, () => {
        console.log(chalk.green(`${title} note, has been remove!`));
      });
    } else {
      console.error(chalk.red(`${title} note, doesnt exists!`));
    }
  }


  /**
   * Método para modificar una nota
   * @param title El titulo de la nota
   * @param newParam El parámetro que queremos modificar
   * @param valParam El nuevo valor del parámetro
   */
  public modifyNote(title: string, newParam: string, valParam: string) {
    const existFile: boolean = fs.existsSync(`src/Database/${this.username}/${title}.json`);

    if (existFile == true) {
      const noteContent = fs.readFileSync(`src/Database/${this.username}/${title}.json`);
      const data = JSON.parse(noteContent.toString());

      switch (newParam) {
        case "title":
          fs.renameSync(`src/Database/${this.username}/${title}.json`, `src/Database/${this.username}/${valParam}.json`);
          fs.writeFile(`src/Database/${this.username}/${valParam}.json`, `${jsonFormat(valParam, data.body, data.color)}`, () => {
            console.log(chalk.green('New title asigned!'));
          });
          break;
        case "body":
          fs.writeFile(`src/Database/${this.username}/${data.title}.json`, `${jsonFormat(data.title, valParam, data.color)}`, () => {
            console.log(chalk.green('New body asigned!'));
          });
          break;
        case "color":
          fs.writeFile(`src/Database/${this.username}/${data.title}.json`, `${jsonFormat(data.title, data.body, valParam)}`, () => {
            console.log(chalk.green('New color asigned!'));
          });
          break;
      }
    } else {
      console.error(chalk.red(`${title} note, doesnt exists!`));
    }
  }


  /**
   * Método para leer el contenido de una nota
   * @param title El titulo de la nota que queremos leer
   */
  public readNote(title: string) {
    const existFile: boolean = fs.existsSync(`src/Database/${this.username}/${title}.json`);

    if (existFile == true) {
      const noteContent = fs.readFileSync(`src/Database/${this.username}/${title}.json`);
      const data = JSON.parse(noteContent.toString());

      switch (data.color) {
        case "red":
          console.log(chalk.blue(`¡Nota de ${this.username}!`));
          console.log('------------------');
          console.log(chalk.red(`Title: ${data.title}\n${data.body}\n`));
          break;
        case "blue":
          console.log(chalk.blue(`¡Nota de ${this.username}!`));
          console.log('------------------');
          console.log(chalk.blue(`Title: ${data.title}\n${data.body}\n`));
          break;
        case "green":
          console.log(chalk.blue(`¡Nota de ${this.username}!`));
          console.log('------------------');
          console.log(chalk.green(`Title: ${data.title}\n${data.body}\n`));
          break;
        case "yellow":
          console.log(chalk.blue(`¡Nota de ${this.username}!`));
          console.log('------------------');
          console.log(chalk.yellow(`Title: ${data.title}\n${data.body}\n`));
          break;
      }
    } else {
      console.error(chalk.red(`${title} note, doesnt exists!`));
    }
  }


  /**
   * Método para listar todas las notas de un usuario
   */
  public listNotes() {
    const existFile: boolean = fs.existsSync(`src/Database/${this.username}`);

    if (existFile == true) {
      console.log(chalk.blue(`¡Notas de ${this.username}!`));
      console.log('------------------');

      fs.readdirSync(`src/Database/${this.username}`).forEach((item) => {
        const userContent = fs.readFileSync(`src/Database/${this.username}/${item}`);
        const data = JSON.parse(userContent.toString());

        switch (data.color) {
          case "red":
            console.log(chalk.red(`${data.title}`));
            break;
          case "blue":
            console.log(chalk.blue(`${data.title}`));
            break;
          case "green":
            console.log(chalk.green(`${data.title}`));
            break;
          case "yellow":
            console.log(chalk.yellow(`${data.title}`));
            break;
        }
      });
    } else {
      console.error(chalk.red(`${this.username} user, doesnt exists!`));
    }
  }
}

/**
 * Función para parsear en formato json las notas, para así almacenarlas en un fichero nuevo, que sea de
 * extensión .json
 */
export function jsonFormat(title: string, body: string, color: string): string {
  return '{\n\t"title\": \"' + title + '\",\n\t"body\": \"' + body + '\",\n\t"color\": \"' + color + '\"\n}';
}


