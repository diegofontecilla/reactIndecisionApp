const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(4, 49, 1001));

const user = {
    name: 'Diego',
    cities: ['Santiago', 'Bologna', 'London'],
    printPacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPacesLived());

const multiplier = {
    numbers: [10, 20, 30],
    multipleBy: 3,
    multiply() {
        return this.numbers.map((number) => this.multipleBy * number)
    }
};

console.log(multiplier.multiply());