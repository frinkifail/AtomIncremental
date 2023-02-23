const atom_counter_oxygen = document.getElementById('atom-counter-oxygen')
const atom_counter_hydrogen = document.getElementById('atom-counter-hydrogen')
const atom_counter_helium = document.getElementById('atom-counter-helium')
const atom_counter_phosphor = document.getElementById('atom-counter-phosphor')
const atom_counter_electron = document.getElementById('atom-counter-electron')
const bang_atoms_button = document.getElementById('bang-atoms-button')

// Stuff?
let selected_atom_electron_bang_option = null; // expect a string
let buy_max = false;

document.getElementById('buy_max_button').onclick = () => {
    if (buy_max) {
        buy_max = false;
    } else {
        buy_max = true;
    }
}

function update_displays() {
    atom_counter_oxygen.innerText = data.atoms.oxygen.amount.toLocaleString()
    atom_counter_hydrogen.innerText = data.atoms.hydrogen.amount.toLocaleString()
    atom_counter_helium.innerText = data.atoms.helium.amount.toLocaleString()
    atom_counter_phosphor.innerText = data.atoms.phosphor.amount.toLocaleString()
    atom_counter_electron.innerText = data.electrons.toLocaleString()
    return true;
}

function update_game() {
    data.atoms.oxygen.amount += data.generators.oxygen.amount * 1.8
    data.atoms.hydrogen.amount += data.generators.hydrogen.amount * 1.62
    data.atoms.helium.amount += data.generators.helium.amount * 1.338
    data.atoms.phosphor.amount += data.generators.phosphor.amount * 1.447
    return true;
}

function update_misc() {
    if (buy_max) {
        convert_electron()
    }
}

const update_interval = setInterval(update_displays, 20)
let game_interval = setInterval(update_game, data.generator_timing)

function update_game_interval() {
    clearInterval(game_interval)
    game_interval = setInterval(update_game, data.generator_timing)
    return true;
}
