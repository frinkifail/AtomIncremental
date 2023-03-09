const atom_counter_oxygen = document.getElementById("atom-counter-oxygen");
const atom_counter_hydrogen = document.getElementById("atom-counter-hydrogen");
const atom_counter_helium = document.getElementById("atom-counter-helium");
const atom_counter_phosphor = document.getElementById("atom-counter-phosphor");
const atom_counter_electron = document.getElementById("atom-counter-electron");
const bang_atoms_button = document.getElementById("bang-atoms-button");
const element_to_mash = document.getElementById("element_to_mash");
const monospace_switch = document.getElementById("monospace-font-switch");

// Stuff?
let selected_atom_electron_bang_option = null; // expect a string
let buy_max = false;
const goal_set = {
    current_goal: {
        name_goal: "Reach 1000 Electrons",
        cname: "electron-1000-start",
        value: null,
        percent: null,
        current_max: null,
        current_next_goal: null,
        current_update_by: null
    },
    sets: {
        "electron-1000-start": {
            max: 1000,
            name: "Reach 1000 Electrons",
            next_goal: "goal-placeholder-done",
            update_by: "electrons" // data value
        },
        "goal-placeholder-done": {
            max: -1000,
            name: "Loading!",
            next_goal: null
        }
    },
    goal_object: document.getElementById('progress-goal'),
    goal_label_object: document.getElementById('progress-goal label'),
    set_goal: function(cname) {
        goal_set.current_goal.cname = cname
        goal_set.current_goal.current_max = goal_set.sets[cname].max
        goal_set.current_goal.name_goal = goal_set.sets[cname].name
        goal_set.current_goal.current_next_goal = goal_set.sets[cname].next_goal
        goal_set.current_goal.current_update_by = goal_set.sets[cname].update_by
    },
    next_goal: function() {
        return goal_set.current_goal.current_next_goal
    }
};

goal_set.set_goal("electron-1000-start")

document.getElementById("buy-max-button").onclick = () => {
    if (buy_max) {
        buy_max = false;
        document.getElementById("buy-max-value-display").innerText = "false";
    } else {
        buy_max = true;
        document.getElementById("buy-max-value-display").innerText = "true";
    }
};

function convert_electron() {
    if (element_to_mash.value === "oxygen") {
        if (data.atoms.oxygen.amount >= 1) {
            data.atoms.oxygen.amount -= 1;
            data.electrons += 8;
        } else;
    }
}

document.getElementById("bang-atoms-button").onclick = convert_electron;

function update_displays() {
    atom_counter_oxygen.innerText = data.atoms.oxygen.amount.toLocaleString();
    atom_counter_hydrogen.innerText = data.atoms.hydrogen.amount.toLocaleString();
    atom_counter_helium.innerText = data.atoms.helium.amount.toLocaleString();
    atom_counter_phosphor.innerText = data.atoms.phosphor.amount.toLocaleString();
    atom_counter_electron.innerText = data.electrons.toLocaleString();
    // if (goal_set.current_goal.cname === "electron-1000-start") {
    //     goal_set.current_goal.name_goal = "Reach 1000 Electrons"
    //     goal_set.current_goal.value = data.electrons
    // }
    return true;
}

function update_game() {
    data.atoms.oxygen.amount += data.generators.oxygen.amount * 1.8;
    data.atoms.hydrogen.amount += data.generators.hydrogen.amount * 1.62;
    data.atoms.helium.amount += data.generators.helium.amount * 1.338;
    data.atoms.phosphor.amount += data.generators.phosphor.amount * 1.447;
    return true;
}

function update_misc() {
    if (buy_max) {
        convert_electron();
    }
    if (monospace_switch.checked) {
        document.body.style.setProperty(
            "--font-family-current",
            getComputedStyle(document.body).getPropertyValue(
                "--font-family-monospace"
            )
        );
        console.log("checked");
    } else {
        document.body.style.setProperty(
            "--font-family-current",
            getComputedStyle(document.body).getPropertyValue(
                "--font-family-sans-serif"
            )
        );
    }
    // Goal Stuff
    goal_set.current_goal.current_max = goal_set.sets[goal_set.current_goal.cname].max
    goal_set.goal_label_object.innerText = goal_set.current_goal.name_goal+" ("+goal_set.current_goal.percent.toString()+"%) ["+goal_set.current_goal.value.toString()+'/'+goal_set.current_goal.current_max+']' // i know i could've used ${} and `` but i just realized after finishing so uhhhhhh leave it be
    goal_set.goal_object.value = goal_set.current_goal.value
    // Other data stuff
    data.user_data.email = localStorage.getItem("/AtomIncremental/UserDataTemp/Email")
    data.user_data.username = localStorage.getItem("/AtomIncremental/UserDataTemp/Username")
}

const update_interval = setInterval(update_displays, 20);
const misc_interval = setInterval(update_misc, 10);
let game_interval = setInterval(update_game, data.generator_timing);

function update_game_interval() {
    clearInterval(game_interval);
    game_interval = setInterval(update_game, data.generator_timing);
    return true;
}
