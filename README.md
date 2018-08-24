# Control 1

## OOP

Este ejercicio trata sobre ir anotando puntos en un partido, que puede ser de
_Voleibol_ o de _Quidditch_

Hay que crear una clase `Partido` con dos clases hijas: `Voleibol` y
`Quidditch`.

Ambas clases tienen dos métodos: `score()` y `hasEnded()`. El método
`score()` sirve para marcar puntos, y el `hasEnded()` devolverá un booleano
que nos indicará si el partido ha terminado o no.

- En el caso del `Voleibol`, los tantos se anotan de uno en uno, y se considera
  que ha acabado el partido cuando llegamos 5 puntos.
- En el caso del `Quidditch`, los tantos se anotan de 10 en 10, y se considera
  que ha acabado el partido cuando llegamos a 150 puntos.

Dejen todo el código que hagan dentro del directorio `src/oop`.

### Ejemplo de uso del Voleibol

```javascript
const voleibolMatch = new Voleibol()
voleibolMatch.score()
voleibolMatch.score()
voleibolMatch.hasEnded() // false, todavía faltan 3 puntos para acabar
voleibolMatch.score()
voleibolMatch.score()
voleibolMatch.score()
voleibolMatch.hasEnded() // true, ya hemos marcado 5 puntos
```

### Ejemplo de uso del Quidditch

```javascript
const quidditchMatch = new Quidditch()
quidditchMatch.score()
quidditchMatch.score()
quidditchMatch.hasEnded() // false, todavía faltan 130 puntos para acabar
quidditchMatch.score()
quidditchMatch.score()
quidditchMatch.score()
voleibolMatch.hasEnded() // false, todavía faltan 100 puntos para acabar

// ... llamar 10 veces más al quidditchMatch.score()

voleibolMatch.hasEnded() // true, ya hemos marcado 150 puntos
```

## Git

Mi compañero de trabajo Adrián [tiene este repositorio de aquí](https://github.com/adrian-afergon/InfinityGauntlet). Resulta que un enemigo suyo
ha eliminado la mitad del código en el commit [`7a3fd54`](https://github.com/adrian-afergon/InfinityGauntlet/commits/master).
¿Qué comando debemos usar para deshacer ese cambio y cómo?

Hay que usar el `revert`

```bash
git revert 7a3fd54
```

## Promesas

Tenemos una API ya con promesas con la función `getUserData(id)`, al que le
pasamos el ID de un usuario y nos devuelve la información de ese usuario.

Tenemos que hacer una función `getFriendsNamesOf(id)`, que nos devuelva un array
con los nombres de los amigos de ese usuario.

Pueden ver los ejemplos en `src/get-friends-names-of.test.js`. Los datos y la
API original están en `no-tocar/friends-api.js`

## Módulos

¿Qué diferencia hay entre CommonJS y los módulos de ES6? ¿En qué casos deberíamos
usar uno u otro? Pongan un ejemplo

CommonJS es el sistema de módulos de Node.js, y los de ES6 son los de la
especificación del estándar de EcmaScript del 2015.

```javascript
// CommonJS
const foo = require('./foo')
module.exports = bar

const { func } = require('./foo')
module.exports = {
  bar
}

// ES6
import foo from './foo'

export default function foo()....

import { func } from './foo'

export function foo() ....
```

## Recursividad

Crear una función `findFirstCapitalLetter(text)` que debe encontrar la primera
letra mayúsculas dentro de un `string`. Si no se encuentra ninguna letra
mayúscula devolverá un `null`

```javascript
findFirstCapitalLetter('hola Que tal') // => Q
findFirstCapitalLetter('Hola Que Tal') // => H
findFirstCapitalLetter('hola que tal') // => null
```

Rellenen el código que hay en `src`
