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
    {
        filler: [
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
        ]
    },
    {
        additive: [
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
        ]
    },
];

class Hamburger {
    constructor(args) {
        this.name = args.name;
        this.price = args.price;
        this.energy = args.energy;
        this.filler = args.filler;
        this.additive = args.additive;
    }

    getHamburger(ham) {
        let newSize = this.getSize();
        let hamburger = ham.filter(item => item.name == newSize)
        hamburger = Object.create(...hamburger)
        let newFiller = this.getFiller()
        let newAdditive = this.getAdditive()
        this.name = hamburger.name;
        this.filler = newFiller.name;
        this.additive = newAdditive.name;
        this.price = hamburger.price + newAdditive.price + newFiller.price;
        this.energy = hamburger.energy + newAdditive.energy + newFiller.energy;
    }

    getSize() {
        let newSize = "";
        do {
            newSize = prompt("choose a large or small hamburger");
        } while(!(newSize == "large" || newSize == "small"));
        return newSize;
    }

    getFiller() {
        let newFiller = "";
        do {
            newFiller = prompt("choose a cheese, salat or potato filler");
        } while(!(newFiller == "cheese" || newFiller == "potato" || newFiller == "salat" || !newFiller));

        if(newFiller) {
            newFiller = HAMBURGER[2].filler.filter(item => item.name == newFiller);
            return Object.create(...newFiller);
        }
    }

    getAdditive() {
        let newAdditive = "";
        do{
            newAdditive = prompt("choose a seasoning or mayonnaise additive");
        } while(!(newAdditive == "seasoning" || newAdditive == "mayonnaise" || !newAdditive))

        if(newAdditive) {
            newAdditive = HAMBURGER[3].additive.filter(item => item.name == newAdditive);
            return Object.create(...newAdditive);
        }
    }
}

let newHam = new Hamburger(1);

newHam.getHamburger(HAMBURGER);
console.log(newHam);