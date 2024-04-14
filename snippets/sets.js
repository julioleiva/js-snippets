/*¿Qué es un objeto `Set' y cómo funciona?

El objeto Set permite almacenar valores únicos de cualquier tipo, ya sean valores primitivos o referencias a objetos.*/

// Podemos crear una instancia de Set utilizando el constructor Set.

const mySet = new Set(["a", "b", "c", "d", "d", "e"]);

/*Podemos utilizar el método add para añadir un nuevo valor a una instancia de Set. Dado que el método add devuelve el objeto Set, podemos encadenar varias llamadas add. Si un valor ya existe en el objeto Set, no se volverá a añadir.*/
mySet.add("f");
mySet.add("g").add("h").add("i").add("j").add("k").add("k");

// Podemos utilizar el método has para comprobar si un valor específico existe en una instancia de Set.
mySet.has("a") // true
mySet.has("z") // true

// Podemos utilizar la propiedad size para obtener la longitud de una instancia de Set.
mySet.size //10

//cEl método clear se puede utilizar para eliminar todos los datos de un Set.
mySet.clear();

// Podemos utilizar un objeto Set para eliminar elementos duplicados de un array.

const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 5];
const uniqueNums = [...new Set(numbers)]; // [1,2,3,4,5,6,7,8]