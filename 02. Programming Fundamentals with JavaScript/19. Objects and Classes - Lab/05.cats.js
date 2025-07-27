function cats(arr) {

    for(let el of arr) {
        let data = el.split(' ');

        let name = data[0];
        let age = data[1];

        class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            return `${name}, age ${age} says Meow`;
        }
    }

        let catAction = new Cat(name, age);

        console.log(catAction.meow());
    } 
}

cats(['Mellow 2', 'Tom 5']);
console.log('-----');
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);