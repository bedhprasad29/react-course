// Scenario 1: Compound Data Manipulation with map and filter

const experiments = [
    { id: 1, results: [2, 3, 3, 4] },
    { id: 2, results: [5, 6, 5, 6] },
];

const averages = experiments.map((ex) => {
    results = 0;
    ex.results.map((e) => {
        results += e;
    })

    const average = results / ex.results.length
    let filtered = []
    return ex.results.map((e) => {
        if (e >= average) {
            filtered = e
        }

        return filtered
    })
})

console.log(averages);
