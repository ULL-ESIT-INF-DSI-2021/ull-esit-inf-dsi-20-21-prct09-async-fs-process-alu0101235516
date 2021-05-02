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

Considerando el siguiente ejemplo de código:

```typescript
  import {access, constants, watch} from 'fs';

if (process.argv.length !== 3) {
  console.log('Please, specify a file');
} else {
  const filename = process.argv[2];

  access(filename, constants.F_OK, (err) => {
    if (err) {
      console.log(`File ${filename} does not exist`);
    } else {
      console.log(`Starting to watch file ${filename}`);

      const watcher = watch(process.argv[2]);

      watcher.on('change', () => {
        console.log(`File ${filename} has been modified somehow`);
      });

      console.log(`File ${filename} is no longer watched`);
    }
  });
}
```
  Tendremos que realizar una traza de la ejecución del programa, la cual se realizará paso a paso mostrando el contenido de la pila de llamadas, la API, la cola de manejadores y la salida por pantalla. Todo esto, dando por hecho que se realizan 2 modificaciones del fichero `helloworld.txt` durante la ejecución del mismo. Para ver dicha traza, accede por el siguiente enlace:
  
  - [TRAZA DEL EJERCICIO 1](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct09-async-fs-process-alu0101235516/blob/master/src/First_project/trace.md)
  
  Después de esto, tendremos que realizar/responder dos preguntas que se nos plantean:
  
  - ¿Qué hace la función `access`? --> Dicha función lo que hace es verificar que permisos tiene el usuario sobre la ruta especificada.
  - ¿Para qué sirve el objeto `constants`? --> El objeto constants sirve para realizar las operaciones del sistema de archivos, incluso la podemos usar (como veremos posteriormente) para la comprobación de un archivo, es decir, con la constante `O_DIRECTORY` veremos si el archivo en cuestión es un directorio o no.

### _**Ejercicio 2:**_
 
 Escriba una aplicación que proporcione información sobre el número de líneas, palabras o caracteres que contiene un fichero de texto. La ruta donde se encuentra el fichero debe ser un parámetro pasado a la aplicación desde la línea de comandos.
 
 En este ejercicio, hemos realizado dos funciones diferentes, una haciendo uso del método `pipe` y otra sin hacer uso del mismo, además de implementar dicha aplicación haciendo uso de la línea de comandos. Los códigos para ambas funciones las podemos ver aquí:
 
  - [Funciones implementadas](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct09-async-fs-process-alu0101235516/blob/master/src/Second_project/method.ts)
 
 Ambas funciones tienen como parámetros el nombre del fichero y la opción elegida, es decir, si quieres que la aplicación funcione con pipe o sin pipe, además, utilizamos el método `spawn` para hacer uso del comando `wc` original de **bash**, el cual, saca un vector diciendo el número de líneas, el número de palabras, el número de caracteres y el nombre con extensión del fichero, aunque este último no lo usaremos.
 
 Para la implementación de `yargs` haremos que desde la línea de comandos le pasemos el nombre del archivo y luego las opciones que queremos, en la forma y orden que el usuario desee. Para poder ver esto de mejor manera, entre en el siguiente enlace:
 
   - [Comando wc](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct09-async-fs-process-alu0101235516/blob/master/src/Second_project/index.ts)

 Finalmente, para tener una mejor idea de como funciona la aplicación, veremos un ejemplo real de la utilización de la misma, en la siguiente imagen:
 
 ![Comando wc](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct09-async-fs-process-alu0101235516/blob/gh-pages/images/EJ2.png)
 
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
