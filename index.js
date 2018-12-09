// Code your solution in this file.
let lowerCaseDrivers = (drivers) => {
    return drivers.map( driver => driver.toLowerCase());
}

let nameToAttributes = (drivers) => {
    return drivers.map( driver => `${driver.firstName} ${driver.lastName}`);
}