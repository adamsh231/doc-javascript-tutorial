// Memory saving purposes
const methodPlayer = {
    eating: function (food) {
        this.energy += food;
        return `Happy eating, ${food} food!`
    },
    playing: function (hour) {
        this.energy -= hour;
        return "Happy playing, " + hour + " hours!"
    }
}

// Function declaration
function FunctionPlayer(name, energy) {
    let player = Object.create(methodPlayer);

    player.name = name;
    player.energy = energy;

    return player
}

// Constructor Declaration
function ConstructorPlayer(name, energy){
    this.name = name
    this.energy = energy
}
ConstructorPlayer.prototype.eating = methodPlayer.eating
ConstructorPlayer.prototype.playing = methodPlayer.playing

// Class Declaration
class ClassPlayer {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }

    eating(food) {
        this.energy += food;
        return "Happy eating, " + food + " food!"
    }

    playing (hour) {
        this.energy -= hour;
        return "Happy playing, " + hour + " hours!"
    }
}



// Initialization
let adam = FunctionPlayer("Adam Syarif Hidayatullah", 10); // Function
let nana = new ConstructorPlayer("Roudhlotul Jannah", 5); // Constructor
let faiz = new ClassPlayer("Faiz Aditya Aisfa", 20) // Class
