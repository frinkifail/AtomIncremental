const atom_counter_oxygen = document.getElementById('atom-counter-oxygen')
const atom_counter_hydrogen = document.getElementById('atom-counter-hydrogen')
const atom_counter_helium = document.getElementById('atom-counter-helium')
const atom_counter_phosphor = document.getElementById('atom-counter-phosphor')
const atom_counter_electron = document.getElementById('atom-counter-electron')

const update_interval = setInterval(function(){
    // atom_counter_display.innerText =
    data.atoms.oxygen.amount += data.generators.oxygen.amount*1.8
    atom_counter_oxygen.innerText = data.atoms.oxygen.amount.toLocaleString()
    data.atoms.hydrogen.amount += data.generators.hydrogen.amount*1.62
    atom_counter_hydrogen.innerText = data.atoms.hydrogen.amount.toLocaleString()
    data.atoms.helium.amount += data.generators.helium.amount*1.338
    atom_counter_helium.innerText = data.atoms.helium.amount.toLocaleString()
    data.atoms.phosphor.amount += data.generators.phosphor.amount*1.447
    atom_counter_phosphor.innerText = data.atoms.phosphor.amount.toLocaleString()
    atom_counter_electron.innerText = data.electrons.toLocaleString()
}, 500) // update function here // basically main interval


