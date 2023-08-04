const cars = ["Ferrari", "Tesla", "Mercedes"];

for (let car of cars) {
    /* for each car in the car list, ou seja
        para cada carro na lista de CARROS
    */
    console.log(car);
}

cars.forEach((car, index) => {
    console.log("-------", index);
    console.log(car);
})

const person = {
    name: "Jane",
    age: 21,
};

// acessando propriedades no objeto
for (property in person ) {
    console.log(person[property]);
}