# Informe. Práctica 9: Sistema de ficheros y creación de procesos en Node.js.
## Desarrollo de Sistemas Informáticos.
#### ADRIAN HERNANDEZ SUAREZ - alu0101235516@ull.edu.es


## _**Introducción.**_

  Para llevar a cabo este informe, hemos tenido que realizar 4 ejercicios sobre el manejor de `fs` y `child_process`, en este caso, una aplicación por ejercicio la cual la usaremos para el manejo de ficheros. Como en las anteriores prácticas, hemos hecho uso de un directorio de trabajo, uso de `mocha` y `chai` para los tests y el uso de `TypeDoc` para la documentación.
  Todo esto llevado a cabo con la metodología TDD, y utilizando el trabajo con ficheros gracias a la API síncrona, que nos proporciona **Node.js**. A todo esto, le tenemos que añadir la nueva implementación de `GitHub Actions` y `SonarCLoud`, una para la integración contínua y la otra para la comprobación de calidad y seguridad, respectivamente.

## _**Objetivos.**_

  El objetivo de esta práctica es lograr el correcto diseño y la efiente implementación de 4 ejercicios que ayude a los usuarios a obtener una correcta gestión de ficheros y directorios. Además de familiarizarnos aún más con las herramientas que vamos a usar, como `GitHub Actions` y `SonarCloud`.

## _**Primer paso: Creación de los directorios de trabajo**_

  Para completar este primer apartado, tendremos que seguir los pasos que se muestran en el siguiente enlace [Creación de un proyecto inicial para trabajar con TypeScript](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html) con esto lo que conseguiremos será crear un espacio de trabajo ideal para comenzar con el desarrollo de los ejercicios propuestos.
  Cuando tengamos esta parte realizada, tendremos creado un directorio llamado `./src`, en este directorio es donde alojaremos todos los ficheros que vayamos necesitando para la implementación de la práctica.
  
## _**Segundo paso: Instalación de mocha y chai; Instanbul y Coveralls; GitHub Actions y Sonar Cloud; Además de la configuración de TypeDoc**_
  
  Una vez tengamos hecho el primer paso de esta práctica tendremos que hacer la instalación de TypeDoc, esto es un generador automático de documentación para proyectos de **TypeScript**.  Para conocer mejor esto y seguir la instalación y configuración correctamente, mire el siguiente enlace [Instalación y Configuración de TypeDoc](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view). 
  Cuando tengamos la documentación creada, tendremos que proceder a la instalación de `Mocha` y de `Chai`. Para conocer mejor su funcionamiento y ver la correcta pauta de instalación, siga el siguiente enlace [Instalación y Configuración de Mocha y Chai](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view).
  
  Una vez tengamos toda la instalación previa, tendremos que instalar Instabull y conocer el uso de Coveralls, para ello podemos seguir los pasos en el siguiente enlace [Instalación y Configuración de Instanbull y Coveralls](https://drive.google.com/file/d/1xLDc4CpoYpsAlCFO_4DMwu7MKCtcZDnh/view).
  
  Para concluir con las instalaciones, para la correcta configuración de GitHub Actions y SonarCloud, podemos hacer eso de los siguientes videos explicativos:
  
  - [GitHub Actions](https://drive.google.com/file/d/1FLPargdPBX6JaJ_85jNsRzxe34sMi-Z3/view).
  - [Sonar Cloud](https://drive.google.com/file/d/1hwtPovQlGvthaE7e7yYshC4v8rOtLSw0/view).
  
  Cuando tengamos todo esto listo, lo que conseguiremos es hacer un TDD del proyecto, es decir, las pruebas unitarias. Utilizando el comando `npm test` podremos ejecutar dichas pruebas, viendo si la función que hemos creado, es correcta o no. Para dar validez y constancia de esto, tendremos que hacer un commit antes de la realización del código y con el test hecho, viendo como falla dicho test, y luego tendremos que hacer otro commit después de la correcta realización del código para dar constancia de que esta bien realizado.

## _**Tercer paso: Realización de los ejercicios**_
### _**Ejercicio 1:**_

Los requisitos que debe cumplir la aplicación de procesamiento de notas de texto, los podremos observar [aquí](https://ull-esit-inf-dsi-2021.github.io/prct08-filesystem-notes-app/). La estructura que he decidido tener para la realización de la práctica es la siguiente:

 Tendremos un directorio principal llamado `/src` en el cual alojaremos todos los ficheros que contiene nuestra aplicación, cada fichero, para tenerlo mejor ordenador, lo he guardado en un directorio diferentes, según su función. Esto es que, tenemos por un lado el directorio `Database` el cual se dedicará a almacenar las notas de los usuarios, un directorio `Notes` el cual se dedica a almacenar el fichero `notes.ts` el cual contiene la clase Note, que explicaremos posteriormente y por otro lado, tenemos un directorio llamado `Users` el cual almacena el fichero con la clase `User`. Finalmente, en nuestro directorio principal `src`, tenemos un fichero llamado `index.ts` el cual es el corazon de nuestra aplicación, ya que ahí se encontrarán todos los comandos de ejecución de nuestro código.
 
 Cabe destacar que también se debe aportar la documentación mediante el uso de TypeDoc y usar una metodología de desarrollo dirigido por pruebas/comportamiento. El código fuente de las pruebas deberá estar alojado en un fichero `index.spec.ts` dentro del directorio `tests`.

  **La clase Note**

  La clase `Note`, es una representación de una nota, es decir, contiene todos los valores que una nota debería tener. Dentro de esta clase, podemos encontrar varios métodos, la gran mayoría dirigidos al manejo y acceso de los atributos privados, los cuales son:
  
  - `title`: Titulo de la nota.
  - `body`: Cuerpo o mensaje de la nota.
  - `color`: Color que tiene la nota.
 
 Los métodos que tiene mi clase `Note`, son:
 
  - `getTitle()`: Método para acceder al título de la nota.
  - `setTitle(newTitle: string)`: Método para cambiar el título de la nota.
  - `getBody()`: Método para acceder al cuerpo de la nota.
  - `setBody(newBody: string)`: Método para cambiar el cuerpo de la nota.
  - `getColor()`: Método para acceder al color de la nota.
  - `setColor(newColor: 'red' | 'blue' | 'yellow' | 'green')`: Método para cambiar el color de la nota.

  Para ver el código en más profundidad, y con mejor claridad, vaya al siguiente enlace, [Clase Note](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101235516/blob/master/src/Notes/note.ts).

### _**Ejercicio 2:**_
  
  La clase `User`, es una representación de los usuarios, es decir, en esta clase, nos encontraremos con todos los métodos necesarios para que un usuario pueda añadir, modificar, eliminar, o si quiere, listar todas las notas que tiene y leer su contenido. Esta clase, esta realizada con el fin de gestionar el directorio del usuario, según como se desee, para ello hacemos uso de los siguientes parámetros:
  
  - `username`: Nombre de usuario.
  - `userNotes`: Un array que contiene las notas del usuario.
 
 Los métodos que tiene mi clase `User`, son:
 
  - `getUsername()`: Método para acceder al nombre del usuario.
  - `setUsername(newUsername: string)`: Método para cambiar el nombre del usuario.
  - `getNotes()`: Método para acceder a las notas del usuario.
  - `addNote(title: string, body: string, color: 'red' | 'blue' | 'yellow' | 'green')`: Método para que un usuario pueda crear una nueva nota dentro de su directorio, esta tendra como nombre, el que le ponga en el título.
  - `removeNote(title: string)`: Método para que un usuario pueda eliminar una nota dentro de su directorio, según el titulo que facilite el usuario, se eliminará.
  - `modifyNote(title: string, newParam: string, valParam: string)`: Método para modificar una nota del usuario, para ello, seleccionaremos el titulo de la nota a modificar, el nuevo parametro que queremos modificar y por lo que lo queremos sustituir.
  - `readNote(title: string)`: Método para leer el contenido de una nota que coincida con el titulo que facilita el usuario.
  - `listNote()`: Método para mostrar el título de todas las notas que tiene el usuario.

Por fuera de la clase, pero dentro del mismo fichero, tenemos una función externa, la cual la usamos para poner en formato JSON el contenido de las notas, esta función se llama `jsonFormat(title: string, body: string, color: string)`.

  Para ver el código en más profundidad, y con mejor claridad, vaya al siguiente enlace, [Clase User](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101235516/blob/master/src/Users/users.ts).
 
   **Aqui tenemos la salida del código ejecutando el `npm run test`**
  
 ![Tests](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101235516/blob/gh-pages/images/test.png)
 
### _**Ejercicio 3:**_
  
 ![Codigo](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101235516/blob/gh-pages/images/coverage.png)
 
 
### _**Ejercicio 4:**_

Una vez creadas las clases, se pasará a crear la aplicación. En esta lo que se ha hecho es que a través de yargs se han añadido los siguientes comandos:

  - `add`: Añade una nota al usuario, se le tiene que pasar como parámetros el usuario `--user="usuario"`, el título de la nota `--title="Título"`, el cuerpo de la nota  `--body="Cuerpo"` y el color de la nota, que se pueden poner 4 colores, red, blue, green o yellow `--color="blue"`.
  - `modify`: Modifica un parámetro concreto de una nota, se le tiene que pasar como parámetro obligatoriamente el usuario `--user="usuario"` y el título de la nota `--title="Título"` y opcionalmente el nuevo valor del campo que se quiere cambiar, el título `--newTitle="Nuevo Título"`, el cuerpo `--newBody="Nuevo Cuerpo"` o el color `--newColor="red"`.
  - `remove`: Borra una nota concreta al usuario, se le tiene que pasar como parámetros el usuario `--user="usuario"` y el título de la nota `--title="Título"`.
  - `list`: Lista los títulos de las notas de los usuarios, se le tiene que pasar como parámetro el usuario `--user="usuario"`.
  - `read`: Lee una nota concreta al usuario, se le tiene que pasar como parámetros el usuario `--user="usuario"` y el título de la nota `--title="Título"`.

Finalmente, para realizar las pruebas, tendremos que introducir en la terminar `node (ruta del archivo en dist) (comando) (parametros del comando)`, tal y como podemos ver en la siguiente imagen:

 ![Comandos](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101235516/blob/gh-pages/images/comandos.png)
 
 ### Conclusiones.

  Para concluir, creo que la práctica ha estado divertida, y ha sido productiva, ha sido interesante el uso del chalk y el del yargs, ambas herramientas, creo que dan un punto de partida a las aplicaciones bastante buena, a partir de ahora, implementando esto y lo que ya hemos aprendido, creo que podremos hacer mejores proyectos. Poco a poco me estoy dando cuenta que me gusta más trabajar con ts o js, y pienso que es un lenguaje muy ágil y flexible.


### _**Bibliografía.**_

Nombre | Enlaces
-------|--------
Introducción a Markdown | https://guides.github.com/features/mastering-markdown/
Información sobre GitHub Pages | https://docs.github.com/en/github/working-with-github-pages
Sitio web de Jekyll | https://jekyllrb.com/
GutHub Learning Lab | https://lab.github.com/
Curso de GitHub Pages | https://lab.github.com/githubtraining/github-pages
Visual Studio Code | https://code.visualstudio.com/
Instalar Visual Studio Code | https://code.visualstudio.com/docs/setup/setup-overview
Tutorial VSCode sobre Additional Components | https://code.visualstudio.com/docs/setup/additional-components
Tutorial VSCode sobre User Interface | https://code.visualstudio.com/docs/getstarted/userinterface
Tutorial VSCode sobre Basic Editing | https://code.visualstudio.com/docs/editor/codebasics
Tutorial VSCode sobre Extension MarketPlace | https://code.visualstudio.com/docs/editor/extension-gallery
Tutorial VSCode sobre IntelliSense | https://code.visualstudio.com/docs/editor/intellisense
Tutorial VSCode sobre Code Navigation | https://code.visualstudio.com/docs/editor/editingevolved
Tutorial VSCode sobre Debugging | https://code.visualstudio.com/docs/editor/debugging
Tutorial VSCode sobre Version Control | https://code.visualstudio.com/docs/editor/versioncontrol
Tutorial VSCode sobre Working with GitHub | https://code.visualstudio.com/docs/editor/github
Tutorial VSCode sobre Integrated Terminal | https://code.visualstudio.com/docs/editor/integrated-terminal
Tutorial VSCode sobre Tasks | https://code.visualstudio.com/docs/editor/tasks
Tutorial VSCode sobre Snippets | https://code.visualstudio.com/docs/editor/userdefinedsnippets
Tutorial VSCode sobre Emmet | https://code.visualstudio.com/docs/editor/emmet
Tutorial VSCode sobre Command Line | https://code.visualstudio.com/docs/editor/command-line
Tutorial VSCode sobre  Multiroot Workspaces | https://code.visualstudio.com/docs/editor/multi-root-workspaces
Tutorial VSCode sobre  Accessibility | https://code.visualstudio.com/docs/editor/accessibility
Conectarnos desde VSCode a una máquina remota por SSH | https://code.visualstudio.com/docs/remote/ssh-tutorial
Informe de la práctica 1 de DSI | https://ull-esit-inf-dsi-2021.github.io/ull-esit-inf-dsi-20-21-prct01-iaas-alu0101206479/
Live Share Extension Pack | https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack
Documentación de Visual Studio Live Share | https://docs.microsoft.com/en-us/visualstudio/liveshare/
Libro Essential TypeScript: From Beginner to Pro | https://learning.oreilly.com/library/view/essential-typescript-from/9781484249796/html/Part_1.xhtml
