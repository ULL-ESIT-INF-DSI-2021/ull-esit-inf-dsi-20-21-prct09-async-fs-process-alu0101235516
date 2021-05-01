CODE TRACE -.

<br><b> Initial trace </b><br>
| LIFO | API | QUEUE | OUTPUT |
| -----| ---- | ----- | ------ |
|  |  |  |  |

<br><b> First Step </b><br>
Introducimos el main del programa en la pila, la cual inicialmente es anónima<br>
| LIFO | API | QUEUE | OUTPUT |
| ---- | --- | ----- | ------ |
| `mainAnonymous()` |  |  |  |

<br><b> Second Step </b><br>
Tras cargarse las librerias y los argumentos, se pasa el access a la API<br>
| LIFO | API | QUEUE | OUTPUT |
| ---- | --- | ----- | ------ |
| `mainAnonymous()` | `access()` |  |  |

<br><b> Third Step </b><br>
La función principal sale de la pila, sale el access de la API y entra el callback en la cola de tareas<br>
| LIFO | API | QUEUE | OUTPUT |
| ---- | --- | ----- | ------ |
|  |  | `callback()` |  |

<br><b> Fifth Step </b><br>
El callback es añadido a la pila, se invoca y retorna un valor<br> 
| LIFO | API | QUEUE | OUTPUT |
| ---- | --- | ----- | ------ |
| `callback()` |  |  |  |
| `console.log(Starting to watch file ${filename})` |  |  |  |

<br><b> Sixth Step </b><br>
Una vez retorna el valor, la llamada sale de la pila<br> 
| LIFO | API | QUEUE | OUTPUT |
| ---- | --- | ----- | ------ |
| `callback()` |  |  |  |
|  |  |  | `console.log(Starting to watch file ${filename})` |

<br><b> Seventh Step </b><br>
Una vez retorna el valor, la llamada sale de la pila<br> 
| LIFO | API | QUEUE | OUTPUT |
| ---- | --- | ----- | ------ |
| `callback()` |  |  |  |
|  |  |  | `Starting to watch file ${filename}` |

<br><b> Eighth Step </b><br>
Entra la función watch() en la pila<br> 
| LIFO | API | QUEUE | OUTPUT |
| ---- | --- | ----- | ------ |
| `callback()` |  |  |  |
| `watch()` |  |  |  |

<br><b> Eighth Step </b><br>
La función watch() pasa a la API, pero llamando a watcher.on()<br> 
| LIFO | API | QUEUE | OUTPUT |
| ---- | --- | ----- | ------ |
| `callback()` | `watcher.on()` |  |  |

<br><b> Nineth Step </b><br>
Se llama a la función y se retorna un valor<br> 
| LIFO | API | QUEUE | OUTPUT |
| ---- | --- | ----- | ------ |
| `callback()` |  |  |  |
| `console.log(File ${filename} is no longer watched)` |  |  |  |

<br><b> Tenth Step </b><br>
Una vez retorna el valor, la llamada sale de la pila<br> 
| LIFO | API | QUEUE | OUTPUT |
| ---- | --- | ----- | ------ |
| `callback()` |  |  |  |
|  |  |  | `File ${filename} is no longer watched` |

<br><b> Eleventh Step </b><br>
Ahora nuestro callback() que será la función watcher.on() pasará a la cola de tareas<br> 
| LIFO | API | QUEUE | OUTPUT |
| ---- | --- | ----- | ------ |
|  |  | `callback()` |  |

<br><b> Twelfth Step </b><br>
Como la pila esta vacia, pasaremos a ejecutar el callback()<br> 
| LIFO | API | QUEUE | OUTPUT |
| ---- | --- | ----- | ------ |
| `callback()` |  |  |  |

<br><b> Twelfth Step </b><br>
El callback es añadido a la pila, se invoca y retorna un valor<br> 
| LIFO | API | QUEUE | OUTPUT |
| ---- | --- | ----- | ------ |
| `callback()` |  |  |  |
| `console.log(File ${filename} has been modified somehow)` |  |  |  |

<br><b> Thirteenth Step </b><br>
El callback es añadido a la pila, se invoca y retorna un valor<br> 
| LIFO | API | QUEUE | OUTPUT |
| ---- | --- | ----- | ------ |
|  |  |  | File ${filename} has been modified somehow |

<br>
Esto lo repetiremos hasta que termine nuestro proceso, que según el código proporcionado es cuando cuando el tamaño del mismo sea igual a 2, o más bien, distinto de 3, mientras va incrementando.