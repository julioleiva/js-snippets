// Before JavaScript delegates the lookup of the property to the Constructor’s prototype, it first checks to see if the property exists on the object being returned from the Constructor. In this case, it does so it calls it.

function Dog(name) {
  this.name = name
  this.speak = () => 'Woof Woof'
}

Dog.prototype.speak = function() {
  return 'Ruff Ruff'
}

const dog = new Dog('Leo')
console.log(dog.speak())


// La característica del lenguaje que se está manifestando en este caso es la capacidad de JavaScript para buscar propiedades en un objeto antes de delegar la búsqueda en el prototipo del constructor.

// Cuando se accede a una propiedad en JavaScript, el intérprete primero verifica si la propiedad existe directamente en el objeto en cuestión. Si la encuentra, utiliza el valor de esa propiedad sin necesidad de buscar en el prototipo.

// En el código proporcionado, al llamar a `dog.speak()`, JavaScript verifica si la propiedad `speak` existe en el objeto `dog` devuelto por el constructor `Dog`. Como dicha propiedad existe en el objeto, JavaScript utiliza la implementación de `speak` definida en el objeto en lugar de delegar la búsqueda en el prototipo del constructor.

// Esta característica es útil para permitir la personalización de objetos creados a través de un constructor y proporcionar métodos o propiedades específicas para cada instancia individual, en lugar de utilizar los valores predeterminados definidos en el prototipo del constructor.


// La característica que se está manifestando en este caso se llama "sobrescritura de propiedades" o "shadowing de propiedades". 

// Cuando una propiedad se define en un objeto específico y también está presente en su prototipo, la propiedad definida en el objeto tiene prioridad sobre la del prototipo. Esto significa que la propiedad definida en el objeto "sobrescribe" o "oculta" la propiedad del prototipo, y cuando se accede a la propiedad, se utiliza la definición del objeto en lugar de la del prototipo. 

// En el código proporcionado, la propiedad `speak` se define tanto en el objeto creado por el constructor `Dog` como en su prototipo. La propiedad definida en el objeto (`this.speak`) tiene prioridad sobre la del prototipo (`Dog.prototype.speak`), y por lo tanto, cuando se accede a `dog.speak()`, se utiliza la implementación definida en el objeto (`() => 'Woof Woof'`), en lugar de la del prototipo (`function() { return 'Ruff Ruff' }`).