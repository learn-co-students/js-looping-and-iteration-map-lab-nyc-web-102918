// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const smallDrivers = drivers.map(driver => driver.toLowerCase())
  return smallDrivers
}
function nameToAttributes(drivers) {
  const lastFirstDrivers = drivers.map(function(driver) {
    let first = driver.split(" ")[0]
    let last = driver.split(" ")[1]

     return {firstName : first, lastName : last}
  })
  return lastFirstDrivers
}
function attributesToPhrase(drivers) {
  const driverPhrase = drivers.map(driver => driver.name + ' is from ' + driver.hometown)
  return driverPhrase
}
