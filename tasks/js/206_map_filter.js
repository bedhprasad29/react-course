const titrationResults = [6.5, 7, 7, 8.2, 6.8, 7];

const neturalResults = titrationResults.filter((result, index) => {
    return result == 7;
})

// console.log(neturalResults)

//////////////////

const configurations = [
    { id: 1, zoom: 10, lightIntensity: 15 },
    { id: 2, zoom: 20, lightIntensity: 20 },
];

const observations = [
    { configId: 1, cellId: 'A', visible: true },
    { configId: 2, cellId: 'B', visible: false },
];

const linkedObservations = observations.map(observation => {
    const config = configurations.find(cfg => cfg.id === observation.configId);
    return { ...observation, config };
});

// console.log(linkedObservations);

const visibleObservations = linkedObservations.filter(observation => observation.visible);

// console.log(visibleObservations);

///////////////////// 5 
const experiments = [
    { id: 1, results: [2, 3, 3, 4, 5] },
    { id: 2, results: [5, 6, 5, 6, 7] },
];

const resultAverage = experiments.map(exp => {
    const total = exp.results.reduce((acc, value) => {
        return acc + value
    }, 0)

    return exp.results.filter((res) => {
        return res > (total / exp.results.length);
    })
})

console.log(resultAverage);
