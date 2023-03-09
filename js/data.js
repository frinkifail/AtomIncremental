const data = {
    atoms: {
        oxygen: {unlocked: true, amount: 0},
        hydrogen: {unlocked: false, amount: 0},
        helium: {unlocked: false, amount: 0},
        phosphor: {unlocked: false, amount: 0}
    }, // basically materials
    electrons: 10, // basically money
    generators: {
        oxygen: {unlocked: true, amount: 1, cost: 10, growth: 1.08},
        hydrogen: {unlocked: false, amount: 0, cost: 125, growth: 1.1},
        helium: {unlocked: false, amount: 0, cost: 350, growth: 1.17},
        phosphor: {unlocked: false, amount: 0, cost: 720, growth: 1.2}
    },
    generator_timing: 500, // in ms
    user_data: {
        email: localStorage.getItem("/AtomIncremental/UserDataTemp/Email"),
        username: localStorage.getItem("/AtomIncremental/UserDataTemp/Username")
    }
}