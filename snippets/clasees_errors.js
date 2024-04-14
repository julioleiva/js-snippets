// Primero, no estamos validando ningún tipo (sí, he oído que TypeScript arregla esto).  
// Segundo, probablemente no sea una buena idea mutar nuestro parámetro name en el set fullName. 

// Tercero, necesitamos pasar firstName y lastName a super dentro de nuestro constructor Employee. 

// Cuarto, debido a la inserción automática de punto y coma, nuestro employeeInfo devolverá undefined en lugar de nuestra cadena. 

// Y por último (creo), cuando creamos una nueva instancia de Empleado, necesitamos hacerlo con la palabra clave new.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    name = name.split(' ');
    this.firstName = name[0];
    this.lastName = name[1];
  }
}

class Employee extends Person {
  constructor(firstName, lastName, title, salary) {
    super();
    this.title = title;
    this.salary = salary;
  }

  get employeeInfo() {
    return 
      `${this.fullName}, ${this.title}, earns $${this.salary} annually.`;
  }
}

const employee = Employee('Jane', 'Doe', 'Software Developer', 90000);




