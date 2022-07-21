const HAMBURGER = [
    {
        name: "small",
        price: 5,
        energy: 20,
    },
    {
        name: "large",
        price: 10,
        energy: 40,
    },
]

const FILLER = [
    {
        name: "cheese",
        price: 1,
        energy: 20,
    },
    {
        name: "salat",
        price: 2,
        energy: 5,
    },
    {
        name: "potato",
        price: 1.5,
        energy: 10,
    },
    
];

const ADDITIVE = [
    {
        name: "seasoning",
        price: 1.5,
        energy: 0,
    },
    {
        name: "mayonnaise",
        price: 2,
        energy: 5,
    },
];


class Hamburger {
    constructor(args) {
        this.name = args.name;
        this.price = args.price;
        this.energy = args.energy;
    }

    render() {
        this.getHamburger();
        document.write(`<div class="product" align="center">
                            <p>Name: ${this.name} hamburger</p>
                            <p>Price: ${this.price}$</p>
                            <p>Energy: ${this.energy}kcal</p>
                        </div>`)
    }

    getHamburger() {
        let filler = this.getFiller();
        if(filler) {
            this.filler = filler.name;
            this.price += filler.price;
            this.energy += filler.energy;
        }

        let additive = this.getAdditive();
        if(additive) {
            this.additive = additive.name;
            this.price += additive.price;
            this.energy += additive.energy;
        }
    }

    getFiller() {
        let filler = "";
        do {
            filler = prompt("choose a cheese, salat or potato filler");
        } while(!(filler == "cheese" || filler == "potato" || filler == "salat" || !filler));

        if(filler) {
            filler = FILLER.filter(item => item.name == filler);
            return Object.create(...filler);
        }
    }

    getAdditive() {
        let additive = "";
        do{
            additive = prompt("choose a seasoning or mayonnaise additive");
        } while(!(additive == "seasoning" || additive == "mayonnaise" || !additive))

        if(additive) {
            additive = ADDITIVE.filter(item => item.name == additive);
            return Object.create(...additive);
        }
    }

}

let newHamburger = "";
do {
    newHamburger = prompt("choose a large or small hamburger");
} while(!(newHamburger == "large" || newHamburger == "small"));

HAMBURGER.filter(item => item.name == newHamburger)
    .map(item => newHamburger = new Hamburger(item));

newHamburger.render();
console.log(newHamburger);