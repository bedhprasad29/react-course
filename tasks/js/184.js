// JavaScript Flight Scheduler

function Flights(flight) {
    this.flights = [];
    this.flights.push(flight);

    this.findFlightByNumber = function (flightNumber) {
        return this.flights.filter(flight => {
            return flight.flight_id == flightNumber;
        })
    }

    this.findAllPassengersOnFlight = function () {
        let passengers = [];
        passengers = this.flights.reduce((acc, flight) => {

        })
    }
}

function Passenger(passenger) {
    console.log(passenger)
    this.passengers = [];
    this.passengers.push(passenger);

    this.findPassengerById = function (passengerId) {
        return this.passengers.filter(pass => {
            return pass.passenger_id == passengerId;
        })
    }
}

let person1 = {
    passenger_id: 321,
    first_name: "Bedh",
    last_name: "Sharma",
    seat_number: "12B"
}

const passenger1 = new Passenger(person1)
console.log(passenger1);

let flight_details1 = {
    flight_id: 11,
    origin_city: "Bangalore",
    destination_city: "Guwahati",
    departure_time: new Date(),
    arrival_time: (new Date()).setHours(3),
    passenger: passenger1.passengers,
}

let flight1 = new Flights(flight_details1)
console.log(flight1);

console.log(flight1.findFlightByNumber(11));



